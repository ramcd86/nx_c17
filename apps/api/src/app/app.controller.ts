import { Controller, Get, Param } from '@nestjs/common';

import { HttpBaseService } from './services/httpbase.service';

import { ISimpleStockQuery } from '@workspace/api-interfaces';

const fs = require('fs');

@Controller()
export class AppController {
  constructor(private readonly _httpBaseService: HttpBaseService) {}

  @Get('hello')
  getData(): Promise<ISimpleStockQuery> {
    // fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    //   if (err) return console.log(err);
    //   console.log('Hello World > helloworld.txt');
    // });
    return this._httpBaseService.getSingleSimpleStockData();
  }

  @Get('coin/:id')
  getSingleQuery(@Param() params): Promise<ISimpleStockQuery> {
    return this._httpBaseService.getSingleSimpleStockData(+params.id);
  }

  @Get('test')
  getTestData() {}
}
