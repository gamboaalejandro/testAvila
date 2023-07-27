
import { Injectable } from '@nestjs/common';
import { ResponseLogin } from './interface/responseLogin.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/signup/interfaces/user.interface';
import { Model } from 'mongoose';
import { HashService } from 'src/utils/encryptPassword';
import { LoginDto } from './dto/loginDto';
import { responsed } from './interface/responseLogin.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private userModel: Model<User>,private readonly hashService: HashService,
    private jwtService: JwtService) { }


    async login(body: LoginDto) : Promise<ResponseLogin | responsed> {
        const userFind = await this.userModel.findOne({ username: body.username }).lean().exec();
        if (!userFind) {
            throw {
                code :404,
                message: 'Registro no encontrado',
                data:{}
            }
        }
        const password = await bcrypt.compare( body.password,userFind.password);
        if (!password) {
            throw {
                code :400,
                message: 'contraseña incorrecta',
                data:{}
            }
        }
        // si las contraseñas coinciden y todo esta correcto se procede a generar el token
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: pass,sessions, ...result } = userFind;
        const token = (await this.jwtService.signAsync(result)).toString();

        // se debe guardar la sesion actual 
        await this.userModel.updateOne({username:body.username},{$push:{sessions:{
            startTime: Date.now(),
            endTime:null,
            user: result._id
        }}}).exec()

        return {
            token:token,
            user: result
        }
    }
}
