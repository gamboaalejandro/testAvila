import { JwtService } from '@nestjs/jwt';
import { Controller, Get, Post ,Res, HttpStatus, Query, Body,UseGuards, Headers } from '@nestjs/common';
import { SignupService } from './signup.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/userdto';
@Controller('signup')
export class SignupController {
    constructor(private signupService: SignupService, private jwtService:JwtService ) { }

    //obtener todos los usuarios
    @Get('/users')
    @UseGuards(AuthGuard('jwt'))
    getUsers(@Res() res, @Query('offset') offset: number, @Query('limit') limit: number) {
        console.log(offset,limit);
        this.signupService.getUsers(offset,limit).then(users => res.status(HttpStatus.OK).json({
                 code: HttpStatus.OK,
                 message: 'Usuarios obtenidos exitosamente',
                 data: users
             }))
}

    //controlador del enpoint para registrar     al usuario en la base de datos
    @Post('/create')
    async createUser(@Res() res , @Body() createUserDto: CreateUserDto) {
        await this.signupService.createUser(createUserDto)
        .then(user => res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            message: 'User Created',
            data: user
            }));
    }

    //controlador para obtener al usuario logeado
    @Get('/logged_user')
    @UseGuards(AuthGuard('jwt'))
    async getLoggedUser(@Headers() headers, @Res() res){
        const user = this.jwtService.decode(headers.authorization.split(' ')[1])
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            message: 'User logged',
            data: user
        });
    
    }


}
