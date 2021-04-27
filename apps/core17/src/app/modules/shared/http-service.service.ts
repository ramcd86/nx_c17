import { Inject, Injectable } from '@angular/core';
import { BASE_URL, SERVER_TICK } from '../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { from, interval, Observable } from 'rxjs';
import {
  ICoinAhead,
  ICoinQuery,
  ISimpleStockCoin,
  ISimpleStockQuery,
  QueryBaseEnum,
  RequestType,
  IRequestBody
} from '@workspace/api-interfaces';
import { startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(SERVER_TICK) private serverTick: number,
    private _http: HttpClient
  ) {}

  private static queryConstructor<T>(
    query: T,
    requestType: RequestType
  ): {
    method: RequestType;
    headers: {
      [key: string]: string;
    };
    body: string;
  } {
    return {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    };
  }

  getCoinTypeAheadValues(): Observable<ICoinAhead[]> {

    const makeQuery = () =>
      HttpService.queryConstructor<IRequestBody>(
        {
          queryType: QueryBaseEnum.GetCoinsAhead,
          returnAttributes: [
            'id',
            'symbol',
            'name',
            'price',
            'rank',
            'uuid',
          ],
        },
        'POST'
      );


    return interval(this.serverTick)
      .pipe(startWith(0))
      .pipe(
        switchMap(() =>
          from(
            fetch(this.baseUrl + '/query', makeQuery()).then(
              (res) => res.json() as Promise<ICoinAhead[]>
            )
          )
        )
      );
  }

  getSingleCoin(uuid: string): Observable<ISimpleStockQuery> {
    return interval(this.serverTick)
      .pipe(startWith(0))
      .pipe(
        switchMap(() =>
          from(
            fetch(this.baseUrl + '/coin/' + uuid).then(
              (res) => res.json() as Promise<ISimpleStockQuery>
            )
          )
        )
      );
  }
}
