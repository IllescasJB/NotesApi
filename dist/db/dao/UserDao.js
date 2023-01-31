"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsById = exports.deleteById = exports.update = exports.create = exports.getById = exports.findAll = void 0;
const UserModel_1 = require("../models/UserModel");
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../../util/connection"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersModel = yield UserModel_1.UserModel.findAll();
    return usersModel.map(um => um.toEntity());
});
exports.findAll = findAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = yield UserModel_1.UserModel.findByPk(id);
    return userModel === null || userModel === void 0 ? void 0 : userModel.toEntity();
});
exports.getById = getById;
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserModel_1.UserModel.create(UserModel_1.UserModel.fromEntity(user));
});
exports.create = create;
const update = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserModel_1.UserModel.update(Object.assign({}, user), { where: { id: id } });
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserModel_1.UserModel.destroy({ where: { id } });
});
exports.deleteById = deleteById;
const existsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const QUERY = "	select exists (select 1 from users u where u.id = :idUsuario);";
    const result = yield connection_1.default.query(QUERY, {
        raw: false,
        plain: true,
        replacements: { idUsuario: id },
        type: sequelize_1.QueryTypes.SELECT
    });
    return (_a = result === null || result === void 0 ? void 0 : result.exists) !== null && _a !== void 0 ? _a : false;
});
exports.existsById = existsById;
