import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';
import { BaseComponent } from './base-component/base.component';
import { TypeaheadComponent } from './typeahead-component/typeahead.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseComponent, TypeaheadComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    BaseComponent,
    TypeaheadComponent
  ]
})
export class ComponentsModule {}
