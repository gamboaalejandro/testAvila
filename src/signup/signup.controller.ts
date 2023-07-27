import { Controller, Get, Post ,Res, HttpStatus, Query, Body,UseGuards } from '@nestjs/common';
import { SignupService } from './signup.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/userdto';
@Controller('signup')
export class SignupController {
    constructor(private signupService: SignupService ) { }

    //obtener todos los usuarios
    @Get('/users')
    getUsers(@Res() res, @Query('offset') offset: number, @Query('limit') limit: number) {
        console.log(offset,limit);
        this.signupService.getUsers(offset,limit).then(users => res.status(HttpStatus.OK).json({
                 code: HttpStatus.OK,
                 message: 'Usuarios obtenidos exitosamente',
                 data: users
             }))
        //this.SignupService.getUsers().then(users => res.status(HttpStatus.OK).json(users));
        // res.status(HttpStatus.OK).json({
        //     code: HttpStatus.OK,
        //     message: 'Get all users',
        //     data: []
        // });
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

    //controlador para 

}
