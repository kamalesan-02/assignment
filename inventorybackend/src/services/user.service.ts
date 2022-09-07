import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { resolve } from "path";
import { Repository } from "typeorm";
import { User } from "../entity/user";

@Injectable()
export class UserService {

    constructor(
            @InjectRepository(User)
            private userRepository: Repository<User>
        ) {};

    createUser(user: User): string {
        this.userRepository.save(user);
        return "User Created Successfully!";
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find({
            order: {
                name: "ASC"
            }
        });
    }

    findUserById(uid: number): Promise<User> {
        
        // findOneBy({name: userName})
        // findOneBy({email: email})
        return this.userRepository.findOneBy({id: uid});

    }

    findUserByName(uname: string): Promise<User[]> {
        return this.userRepository.findBy({name: uname});
    }

    findUserByEmail(uEmail: string): Promise<User> {
        return this.userRepository.findOneBy({email: uEmail});
    }

    findUserByNameAndEmail(uname: string, uEmail: string): Promise<User[]> {
        return this.userRepository.findBy({name: uname, email: uEmail});
    }

    async updateUsers(user: User): Promise<string> {
        var existingUser = await this.findUserById(user.id);
        existingUser.email = user.email;
        this.userRepository.update(user.id, existingUser);
        return "User Updated Successfully";
    }

    deleteUser(id: number): string {
        this.userRepository.delete(id);
        return "User Removed";
    }

    async login(user: User): Promise<User> {
        var dbUser = await this.findUserByEmail(user.email);
        if(dbUser) {
            if (dbUser.password  == user.password)  {
                return dbUser;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}