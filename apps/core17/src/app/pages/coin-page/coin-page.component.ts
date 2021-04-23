import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoinPageRoute } from './coin-page.resolver';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'workspace-coin-page',
  templateUrl: './coin-page.component.html',
  styleUrls: ['./coin-page.component.scss'],
})
export class CoinPageComponent implements OnInit, OnChanges {
  readonly pageData$ = this._activatedRoute.data
    .pipe(
      map((pageData) => {
        return pageData.content as ICoinPageRoute | undefined;
      })
    )
    .pipe(
      tap((pageData) => {
        console.log(pageData);
      })
    );

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}
}
