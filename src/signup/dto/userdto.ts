import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { userCreateResponse } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto implements userCreateResponse {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()   
    readonly email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @ApiProperty()  
    @IsString()
    @IsNotEmpty()
    lastName: string;

}