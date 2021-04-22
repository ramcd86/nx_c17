
import { Component, Input } from '@angular/core';
import { ICoinAhead } from '@workspace/api-interfaces';

@Component({
  selector: 'workspace-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent {

  @Input() coinsAhead: ICoinAhead[] = [];

  constructor() {}
}
