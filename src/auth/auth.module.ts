import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../signup/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { HashService } from 'src/utils/encryptPassword';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema },]),

  JwtModule.register({
    secret: 'secret' , //process.env.SECRET,
    signOptions: { expiresIn: '1h' },
  }),
  PassportModule,],

  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, HashService]
})
export class AuthModule {}
