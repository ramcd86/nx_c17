import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../modules/shared/http-service.service';
import { ISimpleStockQuery } from '@workspace/api-interfaces';

export interface ICoinPageRoute {
  selectedCoin: Observable<ISimpleStockQuery>;
}

@Injectable({
  providedIn: 'root',
})
export class CoinPageResolver implements Resolve<ICoinPageRoute> {
  constructor(private _httpService: HttpService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ICoinPageRoute> {
    const params = { id: route.params['id'], uuid: route.params['uuid'] };

    return {
      selectedCoin: this._httpService.getSingleCoin(params.uuid),
    };
  }
}
