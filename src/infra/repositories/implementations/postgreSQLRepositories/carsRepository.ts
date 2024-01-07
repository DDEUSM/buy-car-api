import { Car } from "../../../../domain/entities/cars";
import { ICarsRepository } from "../../../repository-contracts/ICarsRepository";
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
            car.brandId,
            car.version,
            car.categoryId,
            car.modelYear,
            car.color,
            car.price
        ];

        await this.connection.one("INSERT INTO cars (id, model, brandId, version, categoryId, modelYear, color, price) values ($1, $2, $3, $4, $5, $6, $7, $8)", values);
    }

    async findCarByCode(carCode: string): Promise<Car> 
    {
        const car = await this.connection.one("SELECT * FROM cars WHERE id=$1", [ carCode ]);
        if(!car)
        {
            throw new ApiError(404, "Car not found!");
        }
        return car;
    }

    async find(carAttributes: any): Promise<Car[]>  
    {   
        const values = Object.values(carAttributes);
        const lastIndex = values.length - 1;
        const mountQuery = Object.keys(carAttributes).reduce((query, key, index) => 
        {
            let realIndex = index + 1;
            if (index === 0)
            {
                return query = "SELECT * FROM cars WHERE "+key+"=$"+realIndex+" ";
            }
            else if (index !== lastIndex)
            {
                return query += "AND "+key+"=$"+realIndex+" ";
            }
            else
            {
                return query += "AND "+key+"=$"+realIndex+";";
            }
        }, "");                
        
        const cars = await this.connection.query(mountQuery, 
        values);        
                
        if(!cars.length)
        {
            throw new ApiError(404, "Car not found!");
        }
        return cars;
    }

    async buyCar(carID: string): Promise<void> 
    {
       
    }

    async findUserCars(userID: string): Promise<Car[]> 
    {
       return [] ;
    }
}