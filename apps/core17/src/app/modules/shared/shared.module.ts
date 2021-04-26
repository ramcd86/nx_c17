import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';
import { HttpService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UniversalInterceptorService, HttpService],
  declarations: [],
})
export class SharedModule {}
