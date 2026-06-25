import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { GreetService } from 'src/products/greet.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly loggerService: LoggerService,
    private readonly greetService: GreetService,
  ) {}
  placeOrder(productId: number, quantity: number): string {
    this.greetService.greet('Customer');
    this.loggerService.logger(
      `Placing order for product ID: ${productId}, quantity: ${quantity}`,
    );
    const { item, stockInfo } =
      this.productsService.getProductDetails(productId) || {};

    if (quantity <= 0) {
      return `Invalid quantity: ${quantity}. Order not placed.`;
    }

    const stock = stockInfo?.stock ?? 0;

    if (stock < quantity) {
      return `Sorry, insufficient stock for product ID: ${productId}, ${item || 'Unknown Product'}. Available stock: ${stock}`;
    }

    return `Order placed for product ID: ${productId}, ${item || 'Unknown Product'}, quantity: ${quantity}`;
  }
}
