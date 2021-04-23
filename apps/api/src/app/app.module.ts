import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { ServicesModule } from './services/services.module';

// tslint:disable-next-line:nx-enforce-module-boundaries
import { AppServerModule } from './../../../core17/src/main.server';
import { HttpBaseService } from './services/httpbase.service';
import { MockHttpBaseService } from './services/mockhttpbase.service';
@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/core17/browser'),
    }),
    ServicesModule,
  ],
  providers: [
    {
      provide: 'httpBase',
      useExisting:
        process.env.IS_PRODUCTION === 'true'
          ? HttpBaseService
          : MockHttpBaseService,
    },
  ],
  exports: [],
  controllers: [AppController],
})
export class AppModule {}
