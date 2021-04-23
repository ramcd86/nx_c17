import { Injectable } from '@nestjs/common';
import {
  ISimpleStockQuery,
  ILocalRequestHeaders,
} from '@workspace/api-interfaces';
import { HttpFactoryClass } from './httpfactory.class';

@Injectable()
export class MockHttpBaseService extends HttpFactoryClass {
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
  //
  async getSingleSimpleStockData(stockId = 1): Promise<any> {
    return Promise.resolve([]);
  }
  //
  async getCoinData(): Promise<any> {
    return Promise.resolve([]);
  }
}
