import { Car } from "../../../../domain/entities/cars";
import { ICarsRepository } from "../../../repository-contracts/ICarsRepository";
import { cars } from "../../../../dataForTest/Cars";
import { TSales } from "../../../../domain/entities/sales";
import { Sales } from "../../../../dataForTest/Sales";
import { ApiError } from "../../../../domain/errors/ApiError";
import { IConnection } from "../../../database-contracts/IConnection";
import { CarDto } from "../../../../application/data-transfer-objects/CarDto";

export class CarRepository implements ICarsRepository
{    

    constructor (
        private connection: IConnection
    ){}

    async saveCar (car: CarDto): Promise<void>
    {
        const values = [
            car.id,
            car.model,
            car.brandID,
            car.version,
            car.category,
            car.modelYear,
            car.color,
            car.price
        ];

        await this.connection.one("INSERT INTO cars (id, model, brandId, version, categoryId, modelYear, color, price) values ($1, $2, $3, $4, $5, $6, $7, $8)", values);
    }

    async findCarByCode(carCode: string): Promise<Car> 
    {
        const car = await this.connection.one("SELECT * FROM cars where id=$1", [ carCode ]);
        if(!car)
        {
            throw new ApiError(404, "Car not found!");
        }
        return car;
    }

    async find(carAttributes: any): Promise<Car[]>  
    {           
        return [];
    }

    async buyCar(carID: string): Promise<void> 
    {
       
    }

    async findUserCars(userID: string): Promise<Car[]> 
    {
       return [] ;
    }
}