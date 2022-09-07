import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    
    @Column()
    code: string;

    
    @Column()
    category: string;

}