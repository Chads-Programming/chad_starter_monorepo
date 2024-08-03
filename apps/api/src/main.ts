import { ZodFilter } from '@/shared/filters/zod.filters';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';

const DEFAULT_PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new ZodFilter());

  await app.listen(envs.PORT ?? DEFAULT_PORT);
}
bootstrap();
