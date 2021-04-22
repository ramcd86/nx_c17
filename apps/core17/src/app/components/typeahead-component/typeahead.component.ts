import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoinAhead } from '@workspace/api-interfaces';

@Component({
  selector: 'workspace-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent {
  @Input() coinsAhead: ICoinAhead[] = [];
  public matchingCoins: ICoinAhead[] = [];

  @Output() selectedCoinId: EventEmitter<number> = new EventEmitter<number>()

  constructor() {}

  inputChange($event: any) {
    if ($event.target.value.length > 2) {
      this.matchingCoins = [];
      this.coinsAhead.forEach((coin) => {
        if (
          (coin.name.toLowerCase().includes($event.target.value) ||
            coin.symbol.toLowerCase().includes($event.target.value)) &&
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
}
