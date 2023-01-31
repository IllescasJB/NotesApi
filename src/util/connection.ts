import { Sequelize } from "sequelize-typescript";
import { UserModel } from "../db/models/UserModel";


const notesBdConnection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'notes',
    logging: false,
    models: [UserModel]
});

export default notesBdConnection;