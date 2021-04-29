import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IHomePageRoute } from './home-page.resolver';
import { ISimpleStockCoin } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnChanges {

  historicals = [];
  topSixCoinData = [];

  readonly pageData$ = this._activatedRoute.data.pipe(
    map((pageData) => {
      return pageData.content as IHomePageRoute | undefined;
    })
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.pageData$.subscribe((pageData) =>
      pageData.coinAhead.subscribe((coins) => {
        if (coins) {
          coins.slice(0, 6).forEach((coin, index) => {
            const sourceCoinDifferential = coin.history ? coin.history : coin.sparkline;
            if (!this.historicals[index]) {
              this.historicals[index] = coin;
            }
            this.topSixCoinData[index] = sourceCoinDifferential
              .slice(0, 9)
              .map((coinValue, i) => {
                return {
                  name: `$${parseFloat((+coinValue).toFixed(5))}`,
                  value: +coinValue,
                };
              });
          });
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log('beep');
    }
  }

  navigateToCoin(idPair) {
    const [coinId, universalId] = idPair;
    this._router.navigate(['coin', coinId, universalId]);
  }

}
