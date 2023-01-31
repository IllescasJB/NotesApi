"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiRouter = void 0;
const express_1 = require("express");
const HttpCode_1 = require("../../util/exceptions/HttpCode");
const openApiRouter = (0, express_1.Router)();
exports.openApiRouter = openApiRouter;
openApiRouter.get('/', (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    return res.status(HttpCode_1.HttpCode.OK);
});
