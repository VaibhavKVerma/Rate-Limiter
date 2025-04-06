import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
import { CreateJWTTokenRequest } from './authDto';
import { config } from '../../util/config';

const createJWTToken = async (data: CreateJWTTokenRequest): Promise<string> => {
    return jsonwebtoken.sign(
        {
            userId: data.userId,
        },
        config.JWT_SECRET,
        {
            expiresIn: config.JWT_EXPIRY,
        }
    );
};

const verifyJWTToken = async (token: string): Promise<JwtPayload | string> => {
    return jsonwebtoken.verify(token, config.JWT_SECRET);
};

export { createJWTToken, verifyJWTToken };
