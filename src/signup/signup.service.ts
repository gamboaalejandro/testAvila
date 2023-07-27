import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserResponse } from './interfaces/user.interface';

import { HashService } from 'src/utils/encryptPassword';
import {CreateUserDto} from './dto/userdto';

@Injectable()
export class SignupService {
    constructor(@InjectModel('User') private userModel: Model<User>,private readonly hashService: HashService) { }

    async getUsers(offset = 0, limit = 10 ): Promise<UserResponse> {
        const count = await this.userModel.countDocuments();
        const currentPage = Math.floor(offset / limit) + 1;
        const totalPages = Math.ceil(count / limit);
        const users = await this.userModel.find().skip(offset).limit(limit).exec();
        return {
            users,
            count,
            totalPages,
            currentPage,
        }
        
    }

    async createUser(user: CreateUserDto): Promise<CreateUserDto> {
        const {password }= user // plain password
        user.password = this.hashService.hash(password);
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

}
