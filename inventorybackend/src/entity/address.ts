import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    at: string;

    @Column()
    post: string;

    @Column()
    dist: string;

    @Column()
    pin: number;

    @Column()
    state: string;

    @ManyToOne(type => User, user => user.id )
    @JoinColumn({name: 'uid'})
    user: User;
}