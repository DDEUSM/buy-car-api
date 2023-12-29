import express, {Express, Request, Response} from "express";
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
        this.server[httpMethod](url, async (req: Request, res: Response) => 
        {
            const output = await callback(req.params, req.body);
            if(!output)
            {
                return res.json({});
            }
            return res.json(output);
        });
    }

    listen(port: number , callback?: () => void): void 
    {
        const defaultCallback = () => console.log(`Server is running on http://localhost:${port}`);
        this.server.listen(port, callback || defaultCallback);
    }
}