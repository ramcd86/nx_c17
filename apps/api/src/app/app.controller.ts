
import { Controller, Get, HttpService, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
// import { HttpBaseService } from './services/httpbase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly _httpService: HttpService) {
  }

  getSingleSimpleStockData(stockName?: string): Observable<any> {
    return this._httpService.get("https://coinranking1.p.rapidapi.com/coin/2",{
      "method": "get",
      "headers": {
        "x-rapidapi-key": "0df3986442msh2570fe324a1c315p188f34jsnd1eef6d5ce18",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "useQueryString": true
      }
    })
  }



  @Get('hello')
  getData(): unknown {
    this.getSingleSimpleStockData().subscribe((res) => { console.log(res.data.data) }, (error) => { console.log(error) });
    return this.appService.getData();
  }

  @Get('test')
  getTestData() {

  }
}
