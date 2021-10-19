import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { OgmaInterceptor, OgmaModule } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot(),
    OgmaModule.forRoot({
      service: {
        color: true,
        json: false,
        application: 'NestJS',
      },
      interceptor: {
        http: ExpressParser,
        ws: false,
        gql: false,
        rpc: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: OgmaInterceptor,
    },
  ],
})
export class AppModule {}
