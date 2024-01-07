import { Car } from "../../../domain/entities/cars";
import { ICarsRepository } from "../../../infra/repository-contracts/ICarsRepository";

export class ViewGarageCarsUseCase
{
    private cars: Car[] = []
    
    constructor(
        private carsRepository: ICarsRepository
    ){}

    async execute(userID: string): Promise<Car[]>
    {
        const garagesCars = await this.carsRepository.findUserCars(userID);
        if(garagesCars.length < 1)
        {
            throw new Error("This garage not exists!");
        }
        return garagesCars;
    }


}