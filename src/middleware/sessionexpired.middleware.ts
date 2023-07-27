
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/signup/interfaces/user.interface';
@Injectable()
export class SessionExpiredMiddleware implements NestMiddleware {
  constructor(private jwtService:JwtService, @InjectModel('User') private userModel: Model<User>) {}
  async use(req: Request, res: Response, next: Function) {
      const now = Date.now() / 1000;
      console.log(req.headers['authorization']);
      const user = this.jwtService.decode(req.headers['authorization'].split(' ')[1])
    console.log(user)
      if(!user){
        return res.status(HttpStatus.UNAUTHORIZED).json({
          code: HttpStatus.UNAUTHORIZED,
          message: 'Token inválido',
          data: null
        });
      }
      if(user['exp']< now){
        await this.userModel.updateOne({username:user['username']},{$set:{sessions:{
          endTime: Date.now(),
        }}}).exec()
  
        return res.status(HttpStatus.UNAUTHORIZED).json({
          code: HttpStatus.UNAUTHORIZED,
          message: 'El token ha expirado',
          data: user
      });
      }
      
      console.log('Request...');
      next();
    
   
  }
}
