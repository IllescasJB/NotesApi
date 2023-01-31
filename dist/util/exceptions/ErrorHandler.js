"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("./AppError");
const HttpCode_1 = require("./HttpCode");
class ErrorHandler {
    isTrustedError(error) {
        if (error instanceof AppError_1.AppError) {
            return error.isOperational;
        }
        return false;
    }
    handleError(error, request, response) {
        if (this.isTrustedError(error) && response && request) {
            this.handleTrustedError(error, request, response);
        }
        else {
            this.handleCriticalError(error, request, response);
        }
    }
    handleTrustedError(error, request, response) {
        response.status(error.httpCode).json({
            message: error.message,
            status: error.httpCode,
            path: request.url
        });
    }
    handleCriticalError(error, request, response) {
        if (response && request) {
            response.status(HttpCode_1.HttpCode.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                status: HttpCode_1.HttpCode.INTERNAL_SERVER_ERROR,
                path: request.url
            });
        }
        console.log('Application encountered a critical error. Exiting');
        console.log(error);
        process.exit(1);
    }
}
exports.errorHandler = new ErrorHandler();
