import { ViewCarsUseCase } from "../../useCases/ViewCarsUseCase";
import { Request, Response } from "express";

export class ViewCarsController
{
    constructor(

        private viewCarsUseCase: ViewCarsUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>
    {        
        try 
        {
            const cars = await this.viewCarsUseCase.execute("Supra");
            return res.status(200).json(cars);    
        } 
        catch (error: any) 
        {
            return res.status(400).json({ message: error.message || "Unexpected Error." });
        }        
    }
}


