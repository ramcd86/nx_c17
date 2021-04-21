import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

interface ILocalRequestHeaders {
  [key: string]: string | boolean;
}

@Injectable()
export class HttpBaseService {
  constructor(
    private readonly _httpService: HttpService,
    private readonly _configService: ConfigService
  ) {}

  getLocalHeaders(): ILocalRequestHeaders {
    return {
      'x-rapidapi-key': this._configService.getConfig().requestHeaderAuth.authKey,
      'x-rapidapi-host': this._configService.getConfig().requestHeaderAuth.authHostUrl,
      'useQueryString': true,
    }
  }

  getSingleSimpleStockData(stockId = 1): Observable<any> {
    return this._httpService.get(`${this._configService.getConfig().requestHeaderAuth.authHostUrl}/coin/${stockId}`, {
      method: 'get',
      headers: this.getLocalHeaders()
    });
  }

  // getGlobalCoinStats
}
