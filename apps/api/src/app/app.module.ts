
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { ServicesModule } from './services/services.module';

// tslint:disable-next-line:nx-enforce-module-boundaries
import { AppServerModule } from './../../../core17/src/main.server';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/core17/browser')
    }),
    ServicesModule
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
