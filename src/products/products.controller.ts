import { Body, Controller, Get, NotFoundException, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from './guards/auth/auth.guard';
import { InterceptorInterceptor } from 'src/logger/interceptor/interceptor.interceptor';

@Controller('products')
@UseInterceptors(InterceptorInterceptor)
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
    throw new NotFoundException('Product not found');
    return this.productsService.createProduct(createProductDto);
  }

  // search products by name
  @Get('search')
  searchProducts(@Query('available', ParseBoolPipe) available: boolean) {
    return this.productsService.searchProducts(available);
  }

  // get product details by id 
  @Get(':id')
  @UseGuards(AuthGuard)
  getProductDetails(@Param('id' , ParseIntPipe) id: number) {
    return this.productsService.getProductDetails(id);
  }


}
