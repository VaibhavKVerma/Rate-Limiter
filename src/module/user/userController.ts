import { Router } from "express";
import { login, me, signup } from "./userService";
import CustomError from "../../util/customError";
import { StatusCodes } from 'http-status-codes';
import AuthMiddleware from "../../middleware/authMiddleware";
import CustomRequest from "../../util/customRequest";
const router = Router();

router.post('/signup', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        const result = await signup(user);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error: any) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = { email, password };
        const result = await login(user);
        res.status(StatusCodes.OK).json(result);
    } catch (error: any) {
        next(error);
    }
});

router.get('/me', AuthMiddleware, async (req: CustomRequest, res, next) => {
    try {
        if (!req.loggedInUserId) {
            throw new CustomError('Unauthorized', StatusCodes.UNAUTHORIZED);
        }
        const user = await me(req.loggedInUserId);
        res.status(StatusCodes.OK).json(user);
    } catch (error: any) {
        next(error);
    }
});

export default router;