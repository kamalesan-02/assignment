import { Injectable, NotAcceptableException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../entity/user";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
    
    constructor(private userService: UserService, 
        private jwtService: JwtService) {
    }

    async validateUser(userName: string, pass: string) {
        const user = new User();
        user.email= userName;
        user.password = pass;
        const validUser = await this.userService.login(user);
        if(!validUser) {
            throw new UnauthorizedException();
        }
        return this.login(validUser);
    }

    async login(user: any): Promise<any> {
        const jwtBody = { username: user.email, sub: user.id };
        return {
            access_token: await this.jwtService.sign(jwtBody)
        }
    }
}