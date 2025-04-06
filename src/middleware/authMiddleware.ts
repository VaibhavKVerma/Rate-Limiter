import { NextFunction, Request, Response } from "express";
import CustomError from "../util/customError";
import { verifyJWTToken } from "../module/auth/authService";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../util/customRequest";

const AuthMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new CustomError('Missing token', StatusCodes.UNAUTHORIZED);
    }
    const decoded = await verifyJWTToken(token);
    if (typeof decoded === 'object' && 'userId' in decoded) {
        req.loggedInUserId = decoded['userId'];
        next();
    }
    throw new CustomError('Invalid token', StatusCodes.UNAUTHORIZED);
}

export default AuthMiddleware;