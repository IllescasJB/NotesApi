import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import { errorHandler } from '../../util/exceptions/ErrorHandler';
import { userRouter } from './users';

const router = Router();

router.use('/users',userRouter);

router.use((err: Error, _: Request, __: Response, next: NextFunction) => {
    next(err);
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler.handleError(err,req,res);
});

export default router;