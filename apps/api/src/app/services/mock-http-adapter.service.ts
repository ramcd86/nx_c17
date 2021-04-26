import { Injectable } from '@nestjs/common';
import {
  ICoinQuery,
  ILocalRequestHeaders,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';
import { AbstractHttpAdapter } from './abstract-http-adapter.class';

const fs = require('fs');

export function mockUpdater() {
  setInterval(() => {
    const adjustment = (): number => {
      let finalString = '';
      const adjustmentValue = `${
        Math.floor(Math.random() * (30000 - -30000 + 1)) + -30000
      }`;
      if (adjustmentValue[0] === '-') {
        for (let x = 0; x < adjustmentValue.length; x++) {
          if (x === 2) {
            finalString = finalString += '.';
          } else {
            finalString = finalString += adjustmentValue[x];
          }
        }
      } else {
        for (let x = 0; x < adjustmentValue.length; x++) {
          if (x === 1) {
            finalString = finalString += '.';
          } else {
            finalString = finalString += adjustmentValue[x];
          }
        }
      }
      return +finalString;
    };

    const coins = JSON.parse(
      fs.readFileSync(`./mocks/coins.json`, 'utf8')
    ) as ICoinQuery;

    for (let i = 0; i < 50; i++) {
      const iteration = i + 1;

      const coin = JSON.parse(
        fs.readFileSync(`./mocks/coins-${iteration}.json`, 'utf8')
      ) as ISimpleStockQuery;
      const newAdjustment = (+coin.coin.price * adjustment()) / 100;
      const newPrice = +coin.coin.price + newAdjustment;

      coin.coin.price = `${newPrice}`;
      coin.coin.history.shift();
      coin.coin.history.push(`${newPrice}`);

      coins.coins[i].price = `${newPrice}`;
      coins.coins[i].history.shift();
      coins.coins[i].history.push(`${newPrice}`);

      fs.writeFile(
        `./mocks/coins-${iteration}.json`,
        JSON.stringify(coin),
        function (err) {
          if (err) return console.log(err);
        }
      );
    }

    fs.writeFile(`./mocks/coins.json`, JSON.stringify(coins), function (err) {
      if (err) return console.log(err);
    });

    console.log('Mocks updated');
  }, +process.env.SERVER_TICK);
}

@Injectable()
export class MockHttpAdapterService extends AbstractHttpAdapter {
  constructor() {
    super();
  }
  
  async getSingleSimpleStockData(
    stockUuid = 'Qwsogvtv82FCd'
  ): Promise<ISimpleStockQuery> {
    console.log('getSingleSimpleStockData() pinged.');

    const coinList = JSON.parse(
      fs.readFileSync(`./mocks/coins.json`, 'utf8')
    ) as ICoinQuery;

    const coinId =
      coinList.coins.findIndex((coin) => coin.uuid === stockUuid) + 1;

    return Promise.resolve(
      JSON.parse(
        fs.readFileSync(`./mocks/coins-${coinId}.json`, 'utf8')
      ) as ISimpleStockQuery
    );
  }

  async getCoinData(): Promise<ICoinQuery> {
    console.log('getCoinData() pinged.');
    return Promise.resolve(
      JSON.parse(fs.readFileSync('./mocks/coins.json', 'utf8')) as ICoinQuery
    );
  }
}
