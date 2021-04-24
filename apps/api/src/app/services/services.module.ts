import { HttpModule, Module } from '@nestjs/common';
import { HttpAdapterService } from './http-adapter.service';
import { ConfigService } from './config.service';
import { MockHttpAdapterService } from './mock-http-adapter.service';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, HttpAdapterService, MockHttpAdapterService],
  exports: [HttpAdapterService, MockHttpAdapterService, ConfigService],
})
export class ServicesModule {}
