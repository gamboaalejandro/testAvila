import { Controller, Post, Res, HttpStatus, Body, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    async login(@Res() res, @Body() body) {
       
        this.authService.login(body).then(response => res.status(HttpStatus.OK).json(
            response
        )).catch(err => res.status(err.code | 500).json({
            code: err.code, 
            message: err.message,
            data: err
            }));
    }

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
