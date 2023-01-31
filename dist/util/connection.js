"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const UserModel_1 = require("../db/models/UserModel");
const notesBdConnection = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'notes',
    logging: false,
    models: [UserModel_1.UserModel]
});
exports.default = notesBdConnection;
