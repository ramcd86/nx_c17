// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}




import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
    ]),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
