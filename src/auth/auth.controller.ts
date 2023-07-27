import { Controller, Post, Res, HttpStatus, Body, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/loginDto';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @ApiResponse({status:200,description:'User logged'})
    @ApiResponse({status:401,description:'Token inválido'})
    @ApiResponse({status:404,description:'User not found'})
    @ApiResponse({status:400,description:'Password incorrect'})
    @ApiResponse({status:500,description:'Internal Server Error'})
    @Post('/login')
    async login(@Res() res, @Body() body:LoginDto) {
       
        this.authService.login(body).then(response => res.status(HttpStatus.OK).json(
            response
        )).catch(err =>{
            console.log(err.code)
            res.status(err.code || 500).json(err)} );
    }
    @ApiBearerAuth()
    @ApiResponse({status:200,description:'User logged out'})
    @ApiResponse({status:401,description:'Token inválido'})
    @ApiResponse({status:404,description:'Regist not found'})
    @ApiQuery({name:'id'})
    @Post('/logout')
    @UseGuards(AuthGuard('jwt'))
    async logout(@Res() res, @Query() id) {
               
        this.authService.logout(id.id).then(response => res.status(HttpStatus.OK).json(
            response
        )).catch(err => res.status(err.code | 500).json({
            code: err.code, 
            message: err.message,
            data: err
            }));
    }

}
