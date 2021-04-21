import { HttpModule, Module } from '@nestjs/common';
import { HttpBaseService } from './httpbase.service';
import { ConfigService } from './config.service';

@Module({
  imports: [HttpModule],
  providers: [HttpBaseService, ConfigService],
  exports: [HttpBaseService, ConfigService],
})
export class ServicesModule {}
