import { HttpModule, HttpService, Module } from '@nestjs/common';
import { HttpBaseService } from './httpbase.service';

@Module({
  imports: [
    HttpModule
  ],
  providers: [HttpBaseService],
  exports: [HttpBaseService]

})
export class ServicesModule {}
