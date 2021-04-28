import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    if (window.location.pathname === '/') {
      this._router.navigate(['home']);
    }
  }
}
