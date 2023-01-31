import { User } from "../entities/User";
import * as userService from "../../db/service/UserService";

export const findAll = async (): Promise<User[]> => {
    const users = await userService.findAll();
    return users;
}

export const getById = async (id: number): Promise<User> => {
    const user = await userService.getById(id);
    return user;
}

export const create = async (user: User): Promise<Boolean> => {
    return await userService.create(user);
}

export const update = async (id: number,user: User): Promise<Boolean> => {
    return await userService.update(id,user);
}

export const deleteById = async (id: number): Promise<Boolean> => {
    return await userService.deleteById(id);
}