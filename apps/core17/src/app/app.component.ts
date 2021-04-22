// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '@workspace/api-interfaces';

import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from './app.tokens';
import { HttpService } from './modules/shared/httpservice.service';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public readonly coinsAhead$ = this._httpService.getCoinTypeAheadValues()

  constructor(
              private _httpService: HttpService,
              @Inject(BASE_URL) public baseUrl: string) {}

  ngOnInit() {
  }
}
