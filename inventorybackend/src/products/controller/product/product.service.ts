import { Injectable } from '@nestjs/common';
import { Product } from '../../entity/product';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ) {}

    findAll(): Promise<Product[]> {
        return this.productRepo.find();
    }
}
