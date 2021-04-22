import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'workspace-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnChanges {
  readonly routeData = this._route.snapshot.data;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.routeData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.routeData);
  }
}
