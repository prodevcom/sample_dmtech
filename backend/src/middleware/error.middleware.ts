import {NextFunction, Request, Response} from "express";
import HttpException from "../exceptions/HttpException";

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || "Um erro genérico ocorreu";

    res.status(status).send({
        success: false,
        error: {
            code: status,
            message: message
        }
    });
}

export default errorMiddleware;
