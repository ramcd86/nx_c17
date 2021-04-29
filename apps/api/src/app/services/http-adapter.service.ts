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
      'x-access-token': this._configService.getConfig().requestHeaderAuth
        .authKey,
    };
  }

  async getSingleSimpleStockData(
    stockUuid = 'Qwsogvtv82FCd'
  ): Promise<ISimpleStockQuery> {
    return this._httpService
      .get(
        `https://${
          this._configService.getConfig().requestHeaderAuth.authHostUrl
        }/coin/${stockUuid}`,
        {
          method: 'get',
          headers: this.getLocalHeaders(),
        }
      )
      .toPromise()
      .then((res) => res.data.data as ISimpleStockQuery);
  }

  async getCoinData(): Promise<ICoinQuery> {
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
      .then((res) => {
        return res.data.data as ICoinQuery;
      });
  }
}
