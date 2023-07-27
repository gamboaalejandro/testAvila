import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SessionExpiredMiddleware } from './middleware/sessionexpired.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import {JwtModule, JwtService} from '@nestjs/jwt';
import { userSchema } from './signup/schemas/user.schema';
import { JwtStrategy } from './auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    SignupModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    AuthModule,
    JwtModule.register({
      secret: 'secret' , //process.env.SECRET,  
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService,JwtService, JwtStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionExpiredMiddleware)
      .forRoutes('auth/logout', 'signup/users','signup/logged_user' );
  }
}
