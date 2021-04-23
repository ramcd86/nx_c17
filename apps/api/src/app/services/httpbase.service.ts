import { HttpService, Injectable } from '@nestjs/common';
import {
  ISimpleStockQuery,
  ILocalRequestHeaders,
  ICoinQuery,
} from '@workspace/api-interfaces';
import { ConfigService } from './config.service';
import { HttpFactoryClass } from './httpfactory.class';

@Injectable()
export class HttpBaseService extends HttpFactoryClass {
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
