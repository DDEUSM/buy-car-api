import { Car } from "../../../domain/entities/cars";
import { ICarsRepository } from "../../../infra/repository-contracts/ICarsRepository";
import idGenerator from "../../../utils/IdGenerator";
import { CarDto } from "../../data-transfer-objects/CarDto";

export class CreateCarUseCase
{
    constructor (
        private carsRepository: ICarsRepository
    ){}

    async execute (carAttributes: CarDto): Promise<void>
    {
        const newCar = new Car ({
            id : idGenerator(),
            model: carAttributes.model,
            categoryId: carAttributes.categoryId,
            color: carAttributes.color,
            modelYear: carAttributes.modelYear,
            brandId: carAttributes.brandId,
            price: carAttributes.price,
            version: carAttributes.version
        }) satisfies CarDto;    
        
        await this.carsRepository.saveCar(newCar);
    }
}