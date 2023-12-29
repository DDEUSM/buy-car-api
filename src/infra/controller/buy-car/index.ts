import { AuthorizationError } from "../../../domain/errors/AuthorizationError";
import { BuyCarUseCase } from "../../../application/useCases/buy-car/BuyCarUseCase";
import { Response, Request } from "express";

export class BuyCarController
{
    constructor (
        private buyCarUseCase: BuyCarUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>
    {
        const { carID, userID } = req.body;
        
        try 
        {
            await this.buyCarUseCase.execute(carID, userID);

            return res.status(200).json({
                message: "Car is sold." 
            });    
        } 
        catch (error: any) 
        {
            if(error instanceof AuthorizationError)
            {
                return res.status(error.statusCode).json({ 
                    message: error.message
                });
            }

            return res.status(500).json({ 
                message: "Unexpected Error."
            });
        }        
    }
}