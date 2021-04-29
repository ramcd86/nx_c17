import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomePageResolver } from './home-page/home-page.resolver';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { CoinPageComponent } from './coin-page/coin-page.component';
import { CoinPageResolver } from './coin-page/coin-page.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [HomePageComponent, CoinPageComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    CommonModule,
    NgxChartsModule,
  ],
  exports: [HomePageComponent, CoinPageComponent],
  providers: [HomePageResolver, CoinPageResolver],
})
export class PagesModule {}
