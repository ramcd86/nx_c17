import { HttpModule, Module } from '@nestjs/common';
import { HttpBaseService } from './httpbase.service';
import { ConfigService } from './config.service';
import { MockHttpBaseService } from './mockhttpbase.service';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, HttpBaseService, MockHttpBaseService],
  exports: [HttpBaseService, MockHttpBaseService, ConfigService],
})
export class ServicesModule {}
