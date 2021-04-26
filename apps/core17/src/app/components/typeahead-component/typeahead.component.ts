import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICoinAhead } from '@workspace/api-interfaces';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'workspace-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit {
  @Input() coinsAhead: Observable<ICoinAhead[]>;
  private incomingCoins: ICoinAhead[] = [];
  private input = '';
  public matchingCoins: ICoinAhead[] = [];
  @Output() selectedCoinId: EventEmitter<[number, string]> = new EventEmitter<
    [number, string]
  >();

  constructor() {}

  ngOnInit() {
    this.coinsAhead.subscribe((res: ICoinAhead[]) => {
      this.incomingCoins = res;
      this.updateQueriedCoinData();
    });
  }

  updateQueriedCoinData() {
    if (this.input.length > 2) {
      this.matchingCoins = [];

      this.incomingCoins.forEach((coin) => {
        if (
          (coin.name.toLowerCase().includes(this.input) ||
            coin.symbol.toLowerCase().includes(this.input)) &&
          this.matchingCoins.length < 5
        ) {
          this.matchingCoins.push(coin);
        }
      });
    } else {
      this.matchingCoins = [];
    }
    this.matchingCoins.sort();
  }

  inputChange($event: any) {
    this.input = $event.target.value;
    this.updateQueriedCoinData();
  }
}
