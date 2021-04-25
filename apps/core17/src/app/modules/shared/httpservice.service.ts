import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { from, interval, Observable, timer } from 'rxjs';
import { ICoinAhead } from '@workspace/api-interfaces';
import { concatMap, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private _http: HttpClient
  ) {}

  getCoinTypeAheadValues(): Observable<ICoinAhead[]> {


    return interval(5000)
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
    //
    // interval(2500)
    //   .pipe(startWith(0))
    //   .pipe(switchMap(() => this._http.get(this.baseUrl + '/coins-ahead'))
    //   )

  }
}
