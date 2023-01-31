import { User } from "../../api/entities/User";
import { UserModel } from '../models/UserModel';
import { QueryTypes } from 'sequelize';
import notesBdConnection from '../../util/connection';

export const findAll =  async(): Promise<User[]> => {
    const usersModel = await UserModel.findAll();
    return usersModel.map(um => um.toEntity());
}

export const getById = async(id: number): Promise<User | undefined> => {
    const userModel = await UserModel.findByPk(id);
    return userModel?.toEntity();
}

export const create = async(user: User): Promise<void> => {
    await UserModel.create(UserModel.fromEntity(user));
}

export const update = async(id: number,user: User): Promise<void> => {
    await UserModel.update({...user},{where: {id: id}});
}

export const deleteById = async(id: number): Promise<void> => {
    await UserModel.destroy({where: { id }})
}

export const existsById = async(id: number): Promise<Boolean> => {
    const QUERY = "	select exists (select 1 from users u where u.id = :idUsuario);";
    const result = await notesBdConnection.query<exists>(QUERY,{
            raw: false,
            plain: true, 
            replacements: { idUsuario: id },
            type: QueryTypes.SELECT 
        });
    return result?.exists ?? false;
}

interface exists {
    exists: boolean;
}