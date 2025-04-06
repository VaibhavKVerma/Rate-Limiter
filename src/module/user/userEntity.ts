import { Document,Types } from "mongoose";
import { UserSignupRequest } from "./userDto";

export interface UserEntity extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const DtoToEntity = (user: UserSignupRequest): UserEntity => {
    return {
        _id: new Types.ObjectId().toString(),
        name: user.name,
        email: user.email,
        password: user.password,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    } as UserEntity;
}