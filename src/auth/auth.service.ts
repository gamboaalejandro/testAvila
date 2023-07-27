import { Injectable } from '@nestjs/common';
import { ResponseLogin } from './interface/responseLogin.interface';

@Injectable()
export class AuthService {



    async login(body: any) : Promise<any> {
        return body
    }
}
