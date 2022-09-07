import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { Address } from './entity/address';
import { User } from './entity/user';
import { LogginDataValidator } from './middleware/login.middleware';
import { AuthService } from './services/auth.service';
import { JWTStrategy } from './services/auth.strategy';
import { UserService } from './services/user.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entity/product';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      { type:'mysql', host:'localhost', port:3306, username:'root', password: 'root', 
      database:'inventory', entities: [User, Address, Product], synchronize: false
      }
    ),
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({secret: 'PRODAPTBATCH22@22', signOptions: {expiresIn: '900s'}}),
    ProductsModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, AuthService, JWTStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogginDataValidator).forRoutes('/user/login');
  }
}
