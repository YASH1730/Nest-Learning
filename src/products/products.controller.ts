import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // list all products
  @Get()
  listProducts() {
    return this.productsService.listProducts();
  }

  // create a new product
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  // search products by name
  @Get('search')
  searchProducts(@Query('available', ParseBoolPipe) available: boolean) {
    return this.productsService.searchProducts(available);
  }

  // get product details by id 
  @Get(':id')
  getProductDetails(@Param('id' , ParseIntPipe) id: number) {
    return this.productsService.getProductDetails(id);
  }


}
