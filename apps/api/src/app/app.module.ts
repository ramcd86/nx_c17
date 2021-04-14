
import { AppService } from './app.service';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from './../../../core17/src/main.server';
import { AppController } from './app.controller';
// import { HttpBaseService } from './services/httpbase.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/core17/browser')
    }),
    HttpModule,
    // HttpBaseService
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
