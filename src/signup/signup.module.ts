import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import  {MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';
import { SignupService } from './signup.service';
import { HashService } from 'src/utils/encryptPassword';

@Module({
imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [SignupController],
  providers: [SignupService,HashService],

})
export class SignupModule {}
