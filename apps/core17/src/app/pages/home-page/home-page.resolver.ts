import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpService } from '../../modules/shared/httpservice.service';
import { ICoinAhead } from '@workspace/api-interfaces';
import { interval, Observable, timer } from 'rxjs';

export interface IHomePageRoute {
  coinAhead: Observable<ICoinAhead[]>;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomePageResolver implements Resolve<IHomePageRoute> {
  constructor(private _httpService: HttpService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<IHomePageRoute> {
    return {
      coinAhead: this._httpService.getCoinTypeAheadValues(),
      message: 'resolver works!',
    };
  }
}
