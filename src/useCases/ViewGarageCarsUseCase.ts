import { TCar } from "../entities/cars";
import { ICarsRepository } from "../repositories/ICarsRepository";

export class ViewGarageCarsUseCase
{
    private cars: TCar[] = []
    
    constructor(
        private carsRepository: ICarsRepository
    ){}

    async execute(userID: string): Promise<TCar[]>
    {
        const garagesCars = await this.carsRepository.findUserCars(userID);
        if(garagesCars.length < 1)
        {
            throw new Error("This garage not exists!");
        }
        return garagesCars;
    }


}