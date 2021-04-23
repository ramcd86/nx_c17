import { HttpService } from '@nestjs/common';
import { ConfigService } from './config.service';
import {
  ICoinQuery,
  ILocalRequestHeaders,
  ISimpleStockQuery,
} from '@workspace/api-interfaces';

export interface IHttpBase {
  getSingleSimpleStockData: (
    stockId: number
  ) => Promise<ISimpleStockQuery | any>;
  getCoinData: () => Promise<ICoinQuery | any>;
}

export function httpBase(
  _httpClient: HttpService,
  _configService: ConfigService
) {
  const getLocalHeaders = (): ILocalRequestHeaders => {
    return {
      'x-rapidapi-key': _configService.getConfig().requestHeaderAuth.authKey,
      'x-rapidapi-host': _configService.getConfig().requestHeaderAuth
        .authHostUrl,
      useQueryString: true,
    };
  };

  return {
    getSingleSimpleStockData: async (
      stockId = 1
    ): Promise<ISimpleStockQuery> => {
      return this._httpService
        .get(
          `https://${
            this._configService.getConfig().requestHeaderAuth.authHostUrl
          }/coin/${stockId}`,
          {
            method: 'get',
            headers: getLocalHeaders(),
          }
        )
        .toPromise()
        .then((res) => res.data.data as ISimpleStockQuery);
    },

    getCoinData: async (): Promise<ICoinQuery> => {
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
    },
  };
}

export function mockHttpBase(
  _httpClient: HttpService,
  _configService: ConfigService
) {
  const getLocalHeaders = (): ILocalRequestHeaders => {
    return {
      'x-rapidapi-key': _configService.getConfig().requestHeaderAuth.authKey,
      'x-rapidapi-host': _configService.getConfig().requestHeaderAuth
        .authHostUrl,
      useQueryString: true,
    };
  };

  return {
    getSingleSimpleStockData: async (stockId = 1): Promise<any> => {
      return Promise.resolve([]);
    },

    getCoinData: async (): Promise<any> => {
      return Promise.resolve([]);
    },
  };
}
