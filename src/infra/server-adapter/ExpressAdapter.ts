import express, {Express, NextFunction, Request, Response, request} from "express";
import { IHttpServer } from "../../domain/server-contracts/IHttpServer";

export class ExpressAdapter implements IHttpServer
{
    private server: any;
w
    constructor()
    {
        this.server = express();
        this.server.use(express.json());
    }

    on(httpMethod: string, url: string, callback: Function): void 
    {
        this.server[httpMethod](url, async (req: Request, res: Response, next: NextFunction) => 
        {
            try 
            {
                const output = await callback(req.params, req.body);    
                return res.status(output.statusCode).json(output.body);
            } 
            catch (error) 
            {
                next(error);
            }                       
        });
    }

    middleware(middlewareFunction: Function)
    {
        this.server.use(middlewareFunction);
    }

    listen(port: number , callback?: () => void): void 
    {
        const defaultCallback = () => console.log(`Server is running on http://localhost:${port}`);
        this.server.listen(port, callback || defaultCallback);
    }
}