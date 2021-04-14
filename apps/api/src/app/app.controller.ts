
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { HttpBaseService } from './services/httpbase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly _httpBaseService: HttpBaseService) {
  }


  @Get('hello')
  getData(): unknown {
    this._httpBaseService.getSingleSimpleStockData().subscribe((res) => { console.log(res.data.data) }, (error) => { console.log(error) });
    return this.appService.getData();
  }

  @Get('test')
  getTestData() {

  }
}
