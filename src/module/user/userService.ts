import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import CustomError from '../../util/customError';
import { createJWTToken, verifyJWTToken } from '../auth/authService';
import { UserLoginRequest, UserSignupRequest, UserLoginResponse, UserSignupResponse } from './userDto';
import { createUser, findUserByEmail, findUserById } from './userRepository';
import { CreateJWTTokenRequest } from '../auth/authDto';

const signup = async (user: UserSignupRequest): Promise<UserSignupResponse> => {
    const existingUser = await findUserByEmail(user.email);
    if (existingUser) {
        throw new CustomError('Email already in use', StatusCodes.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await createUser({
        name: user.name,
        email: user.email,
        password: hashedPassword,
    });
    const token = await createJWTToken(new CreateJWTTokenRequest(newUser._id));
    return { token };
};

const login = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
    const user = await findUserByEmail(data.email);
    if (!user) {
        throw new CustomError('User not found', StatusCodes.NOT_FOUND);
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        throw new CustomError('Invalid Credentials', StatusCodes.UNAUTHORIZED);
    }

    const token = await createJWTToken(new CreateJWTTokenRequest(user._id));
    return { token };
};

const me = async (token: string) => {
    token = token.split(' ')[1];
    const decoded = await verifyJWTToken(token);
    if (typeof decoded === 'object' && 'userId' in decoded) {
        const userId = decoded.userId;
        return await findUserById(userId);
    }
    throw new CustomError('Invalid token', StatusCodes.UNAUTHORIZED);
};

export { signup, login, me };
