import { Router, Request, Response } from 'express';
import { User } from '../entities/User';
import { HttpCode } from '../../util/exceptions/HttpCode';
import * as userController from '../controllers/UserController';

const userRouter: Router = Router();

userRouter.get('/',async (req: Request, res: Response) => {
    const users = await userController.findAll();
    return res.status(HttpCode.OK).send(users);
});

userRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userController.getById(id);
    return res.status(HttpCode.OK).send(user);
});

userRouter.post('/', async(req: Request, res: Response) => {
    const user: User = req.body;
    const result = await userController.create(user);
    return res.status(HttpCode.OK).send(result);
});

userRouter.put('/:id', async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user: User = req.body;
    const result = await userController.update(id,user);
    return res.status(HttpCode.OK).send(result);
})

userRouter.delete('/:id', async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await userController.deleteById(id);
    return res.status(HttpCode.OK).send(result);
});

export {userRouter};