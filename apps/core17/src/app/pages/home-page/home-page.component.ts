import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { IHomePageRoute } from './home-page.resolver';
import { Observable } from 'rxjs';
import { ISimpleStockCoin } from '@workspace/api-interfaces';

@Component({
  selector: 'workspace-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnChanges {
  page: any;

  readonly pageData$ = this._activatedRoute.data
    .pipe(
      map((pageData) => {
        console.log(pageData.content);
        return pageData.content as IHomePageRoute | undefined;
      })
    )

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  navigateToCoin(idPair) {
    const [coinId, universalId] = idPair;
    this._router.navigate(['coin', coinId, universalId]);
  }
}
