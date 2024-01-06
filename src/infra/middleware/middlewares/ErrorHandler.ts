import { NextFunction, Request, Response } from "express";
import { IHttpServer } from "../../../domain/server-contracts/IHttpServer";
import { ApiError } from "../../../domain/errors/ApiError";
export class ErrorHandler
{
    constructor (
        private server: IHttpServer
    ){}

    setMiddleware()
    {
        this.server.middleware(async (error: any, req: Request, res: Response, next: NextFunction) => 
        {
            return !(error instanceof ApiError)?
                res.status(500).json("Server error!")    
            :
                res.status(error.statusCode).json({ message: error.message })
        });
    }

} 