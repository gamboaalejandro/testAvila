import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { userCreateResponse } from '../interfaces/user.interface';

export class CreateUserDto implements userCreateResponse {
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    @IsEmail()
    @IsNotEmpty()   
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;

}