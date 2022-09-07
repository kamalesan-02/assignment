import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dob: Date;

    @Column()
    email: string;

    @Column()
    username: string;
    
    @Column()
    password: string;

    @OneToMany( type => Address, address => address.user, {eager: true})
    addresses: Address[];
}