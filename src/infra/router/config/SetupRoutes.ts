import { readdirSync } from "fs";
import { fileURLToPath } from "url";

import path from "path";
import { IHttpServer } from "../../../domain/server-contracts/IHttpServer";

export class SetupRoutes
{
    constructor (
        private server: IHttpServer,
        private repositories: object
    ){}

    execute(): void
    {
        const dirPath = path.dirname(fileURLToPath(import.meta.url));

        readdirSync(`${dirPath}/../routes`).map( async fileName => 
        {
            const configRoutesFile = new (await import (`../routes/${fileName}`))
            .default(this.server, this.repositories);

            configRoutesFile.setRoutes();
        });
    }
} 