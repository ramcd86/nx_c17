import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpService } from '../../modules/shared/httpservice.service';
import { ICoinAhead } from '@workspace/api-interfaces';

export interface IHomePageRoute {
  coinAhead: ICoinAhead[];
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
    const coinAhead: ICoinAhead[] = await this._httpService
      .getCoinTypeAheadValues()
      .toPromise();

    return {
      coinAhead: coinAhead,
      message: 'resolver works!',
    };
  }
}
