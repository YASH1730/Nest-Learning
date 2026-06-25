import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/placeOrder/:productId/:quantity')
  placeOrder(
    @Param('productId') productId: number,
    @Param('quantity') quantity: number,
  ): string {
    return this.ordersService.placeOrder(productId, quantity);
  }
}
