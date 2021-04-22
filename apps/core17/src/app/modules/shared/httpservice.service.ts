
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoinAhead } from '@workspace/api-interfaces';

@Injectable()
export class HttpService {
  constructor(@Inject(BASE_URL) private baseUrl: string,
  private _http: HttpClient) {}


  getCoinTypeAheadValues(): Observable<ICoinAhead[]> {
    return this._http.get<ICoinAhead[]>(this.baseUrl + '/coins-ahead')
  }

}
