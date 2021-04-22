import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface ICoinPageRoute {
  coinId: {
    id: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CoinPageResolver implements Resolve<ICoinPageRoute> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ICoinPageRoute> | Promise<ICoinPageRoute> | any {
    return {
      coinId: route.params,
    };
  }
}
