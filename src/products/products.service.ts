import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { StocksService } from '../stocks/stocks.service';
import type { StockInfo } from '../stocks/stocks.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private loggerService: LoggerService,
    private stocksService: StocksService,
  ) {}

  listProducts(): Array<{ item: string; stockInfo: StockInfo }> {
    this.loggerService.logger('Listing products');
    const milkStock = this.stocksService.getStocks(1);
    const wheatStock = this.stocksService.getStocks(2);
    return [
      { item: 'Milk', stockInfo: milkStock },
      { item: 'Wheat', stockInfo: wheatStock },
      { item: 'Rice', stockInfo: this.stocksService.getStocks(3) },
      { item: 'Sugar', stockInfo: this.stocksService.getStocks(4) },
      { item: 'Salt', stockInfo: this.stocksService.getStocks(5) },
    ];
  }

  getProductDetails(
    productId: number,
  ): { item: string; stockInfo: StockInfo } | null {
    this.loggerService.logger(`Fetching details for product ID: ${productId}`);
    const stockInfo = this.stocksService.getStocks(productId);
    const productMap: Record<number, string> = {
      1: 'Milk',
      2: 'Wheat',
      3: 'Rice',
      4: 'Sugar',
      5: 'Salt',
    };

    const item = productMap[productId];
    if (item) {
      return { item, stockInfo };
    } else {
      this.loggerService.logger(`Product ID: ${productId} not found`);
      return null;
    }
  }

  createProduct(data: CreateProductDto): {
    data: CreateProductDto;
    message: string;
  } {
    this.loggerService.logger('Creating a new product');
    // Logic to create a new product would go here
    return { data, message: 'Product created successfully' };
  }

  searchProducts(available: boolean): Array<{ item: string; stockInfo: StockInfo }> {
    this.loggerService.logger(`Searching for products: ${available}`);
    const products = this.listProducts();
    return products.filter((product) => product.stockInfo.stock > 0);
  }
}
