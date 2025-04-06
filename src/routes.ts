import { Router } from "express";
import userController from "./module/user/userController";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";
import apiResponseMiddleware from "./middleware/apiResponseMiddleware";
import CustomError from "./util/customError";

const router = Router();

router.use('/v1/user', userController);
router.use(apiResponseMiddleware);

// router.use('*', (req, res, next) => {
//     console.log('Not Found');
//     next(new CustomError('Not Found', 400));
// });
router.use(errorHandlerMiddleware);

export default router;