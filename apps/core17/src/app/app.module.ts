import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { BASE_URL } from './app.tokens';
import { getApiBase } from '../environments/environment';
import { PagesModule } from './pages/pages.module';
import { HomePageResolver } from './pages/home-page/home-page.resolver';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoinPageComponent } from './pages/coin-page/coin-page.component';
import { CoinPageResolver } from './pages/coin-page/coin-page.resolver';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,

    SharedModule,
    ComponentsModule,
    PagesModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomePageComponent,
          resolve: { content: HomePageResolver },
          pathMatch: 'full',
        },
        {
          path: 'coin/:id',
          component: CoinPageComponent,
          resolve: { content: CoinPageResolver },
          pathMatch: 'full',
        },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: getApiBase(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
