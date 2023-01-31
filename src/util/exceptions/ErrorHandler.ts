import { Response, Request } from 'express';
import { AppError } from './AppError';
import { HttpCode } from './HttpCode';

class ErrorHandler {
    
    private isTrustedError(error: Error): boolean {
        if (error instanceof AppError) {
            return error.isOperational;
        }
        return false;
    }

    public handleError(error: Error | AppError, request?: Request, response?: Response): void {
        if (this.isTrustedError(error) && response && request) {
            this.handleTrustedError(error as AppError, request, response);
        } else {
            this.handleCriticalError(error, request, response);
        }
    }

    private handleTrustedError(error: AppError, request: Request,response: Response): void {
        response.status(error.httpCode).json({ 
            message: error.message,
            status: error.httpCode,
            path: request.url
        });
    }

    private handleCriticalError(error: Error, request?: Request,response?: Response): void {
        if (response && request) {
            response.status(HttpCode.INTERNAL_SERVER_ERROR).json({ 
                message: error.message,
                status: HttpCode.INTERNAL_SERVER_ERROR,
                path: request.url
            });
        }
        console.log('Application encountered a critical error. Exiting');
        console.log(error);
        process.exit(1);
    }
}

export const errorHandler =  new ErrorHandler();