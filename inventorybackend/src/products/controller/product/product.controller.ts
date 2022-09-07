import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Product } from 'src/products/entity/product';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('/all')
    async findAll(): Promise<Product[]> {
        return await this.productService.findAll();
    }
}
