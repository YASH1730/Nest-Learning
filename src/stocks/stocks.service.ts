import { Injectable } from '@nestjs/common';

export interface StockInfo {
  productId: number;
  stock: number;
}

@Injectable()
export class StocksService {
  getStocks(productId: number): StockInfo {
    // Mock stock data for demonstration purposes
    const stockData: Record<number, StockInfo> = {
      1: { productId: 1, stock: 100 },
      2: { productId: 2, stock: 50 },
      3: { productId: 3, stock: 0 },
      4: { productId: 4, stock: 25 },
      5: { productId: 5, stock: 75 },
    };

    return stockData[productId] ?? { productId, stock: 0 };
  }
}
