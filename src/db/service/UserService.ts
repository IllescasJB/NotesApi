import { User } from "../../api/entities/User";
import { AppError } from "../../util/exceptions/AppError";
import { HttpCode } from "../../util/exceptions/HttpCode";
import * as userDao from "../dao/UserDao";
import { HttpCodeDescription } from '../../util/exceptions/HttpCodeDescription';

export const findAll = async(): Promise<User[]> => {
    return await userDao.findAll();
}

export const getById = async (id: number): Promise<User> => {
    const user = await userDao.getById(id);
    if (!user)
        throw new AppError({httpCode: HttpCode.NOT_FOUND, description: HttpCodeDescription.NOT_FOUND});
    return user;
}

export const create = async (user: User): Promise<Boolean> => {
    await userDao.create(user);
    return true;
}

export const update = async (id: number,user: User): Promise<Boolean> => {
    const userExists = await userDao.existsById(id);
    if (!userExists)
        throw new AppError({httpCode: HttpCode.NOT_FOUND, description: HttpCodeDescription.NOT_FOUND});
    await userDao.update(id,user);
    return true;
}

export const deleteById = async (id: number): Promise<Boolean> => {
    const userExists = await userDao.existsById(id);
    if (!userExists)
        throw new AppError({httpCode: HttpCode.NOT_FOUND, description: HttpCodeDescription.NOT_FOUND});
    await userDao.deleteById(id);
    return true;
}