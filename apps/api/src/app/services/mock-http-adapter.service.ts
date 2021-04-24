import { Injectable } from '@nestjs/common';
import {
  ICoinQuery,
  ILocalRequestHeaders,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';
import { AbstractHttpAdapter } from './abstract-http-adapter.class';

const fs = require('fs');
const { exec } = require('child_process');

@Injectable()
export class MockHttpAdapterService extends AbstractHttpAdapter {
  constructor() {
    super();
  }

  getLocalHeaders(): ILocalRequestHeaders {
    return {
      'x-rapidapi-key': '',
      'x-rapidapi-host': '',
      useQueryString: true,
    };
  }

  async getSingleSimpleStockData(stockId = 1): Promise<ISimpleStockQuery> {
    return Promise.resolve(
      JSON.parse(
        fs.readFileSync(`./mocks/coins-${stockId}.json`, 'utf8')
      ) as ISimpleStockQuery
    );
  }

  async getCoinData(): Promise<ICoinQuery> {
    return Promise.resolve(
      JSON.parse(fs.readFileSync('./mocks/coins.json', 'utf8')) as ICoinQuery
    );
  }
}
