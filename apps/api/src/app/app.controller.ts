import { Controller, Get, Inject, Param } from '@nestjs/common';

import {
  ICoinAhead,
  ICoinQuery,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';
import { HttpFactoryClass } from './services/httpfactory.class';

const fs = require('fs');

@Controller()
export class AppController {
  constructor(
    @Inject('httpBase') readonly _httpBaseService: HttpFactoryClass
  ) {}

  @Get('coin/:id')
  async getSingleQuery(@Param() params): Promise<ISimpleStockQuery> {
    // this._httpBaseService.getCoinData().then((res) => {
    //   console.log('RES!', res)
    //   fs.writeFile('helloworld.txt', JSON.stringify(res), function (err) {
    //     if (err) return console.log(err);
    //     console.log('Hello World > helloworld.txt');
    //   });
    // })
    return this._httpBaseService.getSingleSimpleStockData(+params.id);
  }

  @Get('coins')
  async getCoins(): Promise<ICoinQuery> {
    return this._httpBaseService.getCoinData();
  }

  @Get('coins-ahead')
  async getCoinsAhead(): Promise<ICoinAhead[]> {
    const coinsForTypeHead: ICoinAhead[] = [];
    await this._httpBaseService.getCoinData().then((coins) => {
      coins.coins.forEach((individualCoin) =>
        coinsForTypeHead.push({
          id: individualCoin.id,
          symbol: individualCoin.symbol,
          name: individualCoin.name,
          price: individualCoin.price,
          rank: individualCoin.rank,
        })
      );
    });
    return coinsForTypeHead;
  }

  @Get('test')
  getTestData() {}
}
