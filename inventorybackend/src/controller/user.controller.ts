import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "../services/auth.service";
import { User } from "../entity/user";
import { UserService } from "../services/user.service";

@Controller("/user")
export class UserController {

    constructor(private userService: UserService, private authService: AuthService) {

    }

    @Post("/create") 
    createUser(@Body() user: User): string {
        return this.userService.createUser(user);
    }

    
    @Get("/all") 
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Put("/update") 
    async updateUsers(@Body() user: User): Promise<string> {
        return await this.userService.updateUsers(user);
    }

    @Delete("/delete/:id") //@Query("id") QUERY PARAM
    deleteUser(@Param("id") id: number): string {
        return this.userService.deleteUser(id);
    }

    
    @Post("/login") 
    login(@Body() user: User): Promise<User> {
        return this.authService.validateUser(user.email, user.password);
    }

}