import { Controller, Post ,Res, HttpStatus, Body } from '@nestjs/common';
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

}
