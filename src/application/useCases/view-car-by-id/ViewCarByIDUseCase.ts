import { TCar } from "../../../domain/entities/cars";
import { ICarsRepository } from "../../../infra/repository-contracts/ICarsRepository";

export class ViewCarByIDUseCase
{
    constructor(

        private carsRepository: ICarsRepository
    ){}
    
    async execute(carID: string): Promise<TCar>
    {   
        const car = await this.carsRepository.findCarByCode(carID);
        if(!car)
        {
            throw new Error("This car not exists!");
        }
        return car;
    }
}