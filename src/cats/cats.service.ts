import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(
    private configService: ConfigService,
    @OgmaLogger(CatsService) private readonly logger: OgmaService,
  ) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    this.logger.silly('Silly!');
    this.logger.error('Error!');
    this.logger.verbose('Verbose!');
    this.logger.fatal('Fatal!');
    console.log(dbUser);
    return this.cats;
  }
}
