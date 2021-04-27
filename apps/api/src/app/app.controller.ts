import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

interface Ix {
  y: string;
}

import {
  ICoinAhead,
  ICoinQuery, IRequestBody, ISimpleStockCoin,
  ISimpleStockQuery,
  QueryBaseEnum
} from '@workspace/api-interfaces';
import { AbstractHttpAdapter } from './services/abstract-http-adapter.class';
import { mockUpdater } from './services/mock-http-adapter.service';

@Controller()
export class AppController {
  constructor(
    @Inject('httpBase') readonly _httpBaseService: AbstractHttpAdapter
  ) {
    if (process.env.IS_PRODUCTION === 'false') {
      console.log('MOCK UPDATER STARTED!');
      mockUpdater();
    }
  }

  @Get('config')
  getConfig(): { serverTick: number } {
    return {
      serverTick: +process.env.SERVER_TICK,
    };
  }

  getGeneratedCoinsAhead(allCoins: ISimpleStockCoin[], attributesForSelection: Array<keyof ISimpleStockCoin>): ICoinAhead[] {
    const builtCoinAhead: ICoinAhead[] = []
    allCoins.forEach(coin => {
      let queriedObject: ICoinAhead | {} = {}
      attributesForSelection.forEach(attribute => {
        queriedObject[attribute] = coin[attribute]
      })
      console.log('queriedObject', queriedObject)
      builtCoinAhead.push(queriedObject as ICoinAhead)
      queriedObject = {};
    })
    return builtCoinAhead;
  }

  @Post('query')
  async getGeneralQuery(@Body() body: IRequestBody) {
    console.log('body', body);

    const allCoins: ICoinQuery = await this._httpBaseService.getCoinData();

    switch (body.queryType) {
      case QueryBaseEnum.GetCoinsAhead:
        return this.getGeneratedCoinsAhead(allCoins.coins, body.returnAttributes as Array<keyof ISimpleStockCoin>)
      case QueryBaseEnum.GetCoins:
        return {

        }
      case QueryBaseEnum.GetSingleCoin:
        return {

        }
    }
  }

  @Get('coin/:Uuid')
  async getSingleQuery(@Param() params): Promise<ISimpleStockQuery> {
    return this._httpBaseService.getSingleSimpleStockData(params.Uuid);
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
          uuid: individualCoin.uuid,
        })
      );
    });
    return coinsForTypeHead;
  }

  @Get('test')
  getTestData() {}
}
