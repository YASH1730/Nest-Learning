import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { LoggerService } from '../logger/logger.service';
import { StocksService } from '../stocks/stocks.service';
import { GreetService } from './greet.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, LoggerService, StocksService, GreetService],
  exports: [ProductsService, GreetService],
})
export class ProductsModule {}
