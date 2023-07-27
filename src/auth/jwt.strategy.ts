import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadToken } from './interface/token.interface';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extrae el token del header
      ignoreExpiration: false,
      secretOrKey: 'secret', //process.env.SECRET,
    });
  }
  async validate(payload: PayloadToken) {
    return { username: payload.username };
  }
}