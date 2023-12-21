import { Users } from "../../useCases/users";
import { Request, Response } from "express";

export class CarController
{
    constructor(

        private userUseCase: Users
    ){}

    async handle(req: Request, res: Response): Promise<Response>
    {
        const { carModel } = req.body;

        try 
        {
            const cars = await this.userUseCase.viewCars(carModel);
            return res.status(200).json(cars);    
        } 
        catch (error: any) 
        {
            return res.status(400).json({ message: error.message || "Unexpected Error." })
        }
        
    }
}


