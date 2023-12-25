import { Request, Response } from "express";
import { ViewGarageCarsUseCase } from "../../useCases/ViewGarageCarsUseCase";

export class ViewGarageCarsController
{
    constructor(
        private viewGarageCarsUseCase: ViewGarageCarsUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>
    {
        const { userID } = req.params;        

        try
        {
            const garageCars = await this.viewGarageCarsUseCase.execute(userID);
            return res.status(200).json(garageCars);
        }
        catch(error: any)
        {
            return res.status(400).json({ message: error.message || "Unexpected Error." });
        }
    }
}