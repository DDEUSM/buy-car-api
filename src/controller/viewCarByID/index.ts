import { ViewCarByIDUseCase } from "../../useCases/ViewCarByIDUseCase";
import { Request, Response } from "express";

export class ViewCarByIDController
{
    constructor(
        private viewCarByIDUseCase: ViewCarByIDUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>
    {        
        const { carID } = req.params;

        try 
        {
            const car = await this.viewCarByIDUseCase.execute(carID);
            return res.status(200).json(car);    
        } 
        catch (error: any) 
        {
            return res.status(400).json({ message: error.message || "Unexpected Error." });
        }        
    }
}
