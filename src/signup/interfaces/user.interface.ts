import { Document } from 'mongoose';
import { Schema } from 'mongoose';
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    sessions?: [{
        startTime: Date;
        endTime: Date;
        user: Schema.Types.ObjectId;
    }];
}

export interface UserResponse {
    users: User[];
    count: number;
    totalPages: number;
    currentPage: number;
}

export interface userCreateResponse {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    sessions?: [{
        startTime: Date;
        endTime: Date;
        user: Schema.Types.ObjectId;
    }];
}
