"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = require("./exceptions/ErrorHandler");
process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Rejection: ${reason.message | reason}`);
    throw Error(reason.message || reason);
});
process.on('uncaughtException', (error) => {
    console.log(`Uncaught Exception: ${error.message}`);
    ErrorHandler_1.errorHandler.handleError(error);
});
