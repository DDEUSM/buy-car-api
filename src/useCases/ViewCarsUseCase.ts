import { TCar } from "../entities/cars";
import { TSales } from "../entities/sales";
import { ICarsRepository } from "../repositories/ICarsRepository";

export class ViewCarsUseCase 
{
    constructor(

       private carsRepositories: ICarsRepository,       
    ){}    

    async execute(carModel: string): Promise<TCar[]>
    {
        const cars = await this.carsRepositories.findCarsByModel(carModel);                    
        if(!cars)
        {
            throw new Error("This cars not exists!");
        }
        return cars;
    }

}