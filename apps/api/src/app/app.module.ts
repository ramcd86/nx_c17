
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from './../../../core17/src/main.server';
import { AppController } from './app.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/core17/browser')
    })
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
