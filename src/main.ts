import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './products/guards/auth/auth.guard';
import { CustomerFilterFilter } from './common/filter/customer-filter/customer-filter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalFilters(new CustomerFilterFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
