import { NextFunction, Request, Response } from "express";
import CustomError from "../util/customError";

const ErrorHandlerMiddleware = (error: Error,req: Request, res: Response, next: NextFunction) => {
    if (error) {
        if(error instanceof CustomError) {
            if(!error.status) {
                error.status = 500;
            }
            res.status(error.status).json({
                message: error.message,
                status: error.status,
                timestamp: new Date().toUTCString(),
                stack: error.stack,
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error',
                status: 500,
                timestamp: new Date().toUTCString(),
                stack: error.stack,
            });
        }
    }
    next();
}

export default ErrorHandlerMiddleware;