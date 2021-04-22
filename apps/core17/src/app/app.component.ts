

import { Component, OnInit} from '@angular/core';
import { HttpService } from './modules/shared/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public readonly coinsAhead$ = this._httpService.getCoinTypeAheadValues()

  constructor(private _httpService: HttpService,
              private _router: Router) {}

  ngOnInit() {
  }

  navigateToCoin(id: number | string) {
    this._router.navigate(['coin', id])
  }
}
