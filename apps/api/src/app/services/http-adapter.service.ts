import { HttpService, Injectable } from '@nestjs/common';
import {
  ISimpleStockQuery,
  ILocalRequestHeaders,
  ICoinQuery,
} from '@workspace/api-interfaces';
import { ConfigService } from './config.service';
import { AbstractHttpAdapter } from './abstract-http-adapter.class';

@Injectable()
export class HttpAdapterService extends AbstractHttpAdapter {
  constructor(
    private readonly _httpService: HttpService,
    private readonly _configService: ConfigService
  ) {
    super();
  }

  getLocalHeaders(): ILocalRequestHeaders {
    return {
      'x-rapidapi-key': this._configService.getConfig().requestHeaderAuth
        .authKey,
      'x-rapidapi-host': this._configService.getConfig().requestHeaderAuth
        .authHostUrl,
      useQueryString: true,
    };
  }

  async getSingleSimpleStockData(stockId = 1): Promise<ISimpleStockQuery> {
    return this._httpService
      .get(
        `https://${
          this._configService.getConfig().requestHeaderAuth.authHostUrl
        }/coin/${stockId}`,
        {
          method: 'get',
          headers: this.getLocalHeaders(),
        }
      )
      .toPromise()
      .then((res) => res.data.data as ISimpleStockQuery);
  }

  async getCoinData(): Promise<ICoinQuery> {
    console.log('!')
    return this._httpService
      .get(
        `https://${
          this._configService.getConfig().requestHeaderAuth.authHostUrl
        }/coins`,
        {
          method: 'get',
          headers: this.getLocalHeaders(),
        }
      )
      .toPromise()
      .then((res) => res.data.data as ICoinQuery);
  }
}
