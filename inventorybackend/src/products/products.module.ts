import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controller/product/product.controller';
import { ProductService } from './controller/product/product.service';
import { Product } from './entity/product';

@Module({
    imports:[TypeOrmModule.forFeature([Product]),],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductsModule {}
