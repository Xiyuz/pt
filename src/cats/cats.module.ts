import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { ConfigModule } from '@nestjs/config';
import { OgmaModule } from '@ogma/nestjs-module';

@Module({
  providers: [CatsService],
  controllers: [CatsController],
  imports: [ConfigModule, OgmaModule.forFeature(CatsService.name)],
})
export class CatsModule {}
