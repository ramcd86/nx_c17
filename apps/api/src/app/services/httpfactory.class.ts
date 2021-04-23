import {
  ICoinQuery,
  ILocalRequestHeaders,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HttpFactoryClass {
  abstract getLocalHeaders(): ILocalRequestHeaders;
  abstract getSingleSimpleStockData(
    stockId: number
  ): Promise<ISimpleStockQuery | any>;
  abstract getCoinData(): Promise<ICoinQuery | any>;
}
