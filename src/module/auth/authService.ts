import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
import { CreateJWTTokenRequest } from './authDto';

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRY: any = Number(process.env.JWT_EXPIRY) || '1d';

const createJWTToken = async (data: CreateJWTTokenRequest): Promise<string> => {
    return jsonwebtoken.sign(
        {
            userId: data.userId,
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRY,
        }
    );
};

const verifyJWTToken = async (token: string): Promise<JwtPayload | string> => {
    return jsonwebtoken.verify(token, JWT_SECRET);
};

export { createJWTToken, verifyJWTToken };
