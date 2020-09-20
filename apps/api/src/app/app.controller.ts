
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
// import { environment }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(environment);
  }

  @Get('hello')
  getData(): unknown {
    return this.appService.getData();
  }
}
