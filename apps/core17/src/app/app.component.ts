// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '@workspace/api-interfaces';

import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data? = this.http.get<unknown>('/api/coin/2');

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
