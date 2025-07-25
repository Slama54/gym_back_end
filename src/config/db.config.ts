import * as path from 'path';
import { ConfigService } from '@nestjs/config';

export const dbconfig = (configService: ConfigService) => ({
  type: configService.get<'mysql' | 'postgres'>('DATABASE_TYPE') as
    | 'mysql'
    | 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],

  synchronize: true,
});
