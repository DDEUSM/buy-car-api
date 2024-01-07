import { IHttpServer } from "../../../domain/server-contracts/IHttpServer";
import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

export class SetupMiddlewares 
{
    constructor (
        private server: IHttpServer
    ){}

    execute()
    {
        const dirPath = path.dirname(fileURLToPath(import.meta.url));
        readdirSync(`${dirPath}/../middlewares`).map(async fileName => 
        {
            const configMiddleware = new (await import(`../middlewares/${fileName}`))
            .default(this.server);
            
            configMiddleware.setMiddleware();
        });
    }
}