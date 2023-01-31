"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.create = exports.getById = exports.findAll = void 0;
const AppError_1 = require("../../util/exceptions/AppError");
const HttpCode_1 = require("../../util/exceptions/HttpCode");
const userDao = __importStar(require("../dao/UserDao"));
const HttpCodeDescription_1 = require("../../util/exceptions/HttpCodeDescription");
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield userDao.findAll();
});
exports.findAll = findAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userDao.getById(id);
    if (!user)
        throw new AppError_1.AppError({ httpCode: HttpCode_1.HttpCode.NOT_FOUND, description: HttpCodeDescription_1.HttpCodeDescription.NOT_FOUND });
    return user;
});
exports.getById = getById;
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield userDao.create(user);
    return true;
});
exports.create = create;
const update = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield userDao.existsById(id);
    if (!userExists)
        throw new AppError_1.AppError({ httpCode: HttpCode_1.HttpCode.NOT_FOUND, description: HttpCodeDescription_1.HttpCodeDescription.NOT_FOUND });
    yield userDao.update(id, user);
    return true;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield userDao.existsById(id);
    if (!userExists)
        throw new AppError_1.AppError({ httpCode: HttpCode_1.HttpCode.NOT_FOUND, description: HttpCodeDescription_1.HttpCodeDescription.NOT_FOUND });
    yield userDao.deleteById(id);
    return true;
});
exports.deleteById = deleteById;
