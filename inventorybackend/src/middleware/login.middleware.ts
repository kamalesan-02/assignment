import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LogginDataValidator implements NestMiddleware {
    
    use(req: any, res: any, next: (error?: any) => void) {
        console.log("Inside Middleware");
        
        if(!req.body.email || !req.body.password) {
            res.status(401);
            res.send('Invalid Credentials!');
        }
        next();
    }
}