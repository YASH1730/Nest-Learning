import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { StocksService } from 'src/stocks/stocks.service';
import { LoggerService } from 'src/logger/logger.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, StocksService, LoggerService],
  imports: [ProductsModule],
})
export class OrdersModule {}
