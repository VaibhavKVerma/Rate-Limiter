import { Request } from "express";

export default interface CustomRequest extends Request {
    loggedInUserId?: string;
}