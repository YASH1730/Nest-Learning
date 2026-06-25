import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LoggerService } from './logger/logger.service';
import { StocksService } from './stocks/stocks.service';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsModule } from './contacts/contacts.module';
import { OrdersModule } from './orders/orders.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ContactsModule,
    OrdersModule,
    StocksModule,
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, LoggerService, StocksService, ContactsService],
})
export class AppModule {}
