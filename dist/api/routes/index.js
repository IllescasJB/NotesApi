"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const ErrorHandler_1 = require("../../util/exceptions/ErrorHandler");
const users_1 = require("./users");
const router = (0, express_1.Router)();
router.use('/users', users_1.userRouter);
router.use((err, _, __, next) => {
    next(err);
});
router.use((err, req, res, next) => {
    ErrorHandler_1.errorHandler.handleError(err, req, res);
});
exports.default = router;
