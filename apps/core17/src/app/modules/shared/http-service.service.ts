import { Inject, Injectable } from '@angular/core';
import { BASE_URL, SERVER_TICK } from '../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { from, interval, Observable, timer } from 'rxjs';
import { ICoinAhead, ISimpleStockQuery } from '@workspace/api-interfaces';
import { concatMap, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(SERVER_TICK) private serverTick: number,
    private _http: HttpClient
  ) {}

  getCoinTypeAheadValues(): Observable<ICoinAhead[]> {
    return interval(this.serverTick)
      .pipe(startWith(0))
      .pipe(
        switchMap(() =>
          from(
            fetch(this.baseUrl + '/coins-ahead').then(
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
