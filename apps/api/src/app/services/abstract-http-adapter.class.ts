import {
  ICoinQuery,
  ILocalRequestHeaders,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AbstractHttpAdapter {
  abstract getSingleSimpleStockData(
    stockUuid: string
  ): Promise<ISimpleStockQuery | any>;
  abstract getCoinData(): Promise<ICoinQuery | any>;
}
