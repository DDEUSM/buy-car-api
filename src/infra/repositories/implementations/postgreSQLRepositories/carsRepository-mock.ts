import { Car } from "../../../../domain/entities/cars";
import { ICarsRepository } from "../../../repository-contracts/ICarsRepository";
import { Cars } from "../../../../dataForTest/Cars";
import { TSales } from "../../../../domain/entities/sales";
import { Sales } from "../../../../dataForTest/Sales";
import { ApiError } from "../../../../domain/errors/ApiError";
import { IConnection } from "../../../database-contracts/IConnection";
import { CarDto } from "../../../../application/data-transfer-objects/CarDto";

export class CarRepository implements ICarsRepository
{
    private cars: Car[] = Cars;
    private sales: TSales[] = Sales;

    constructor (
        connection: IConnection
    ){}

    async findCarByCode(carCode: string): Promise<Car> 
    {
        const car = this.cars.find(car => car.id == carCode);        
        if(!car)
        {
            throw new ApiError( 404, "Car not found!");
        }
        return car;
    }

    async find(carAttributes: any): Promise<Car[]>  
    {           
        const carsFound: Car[] = [];        
        for(let car of this.cars)
        {
            let isEqual = true;            
            Object.keys(carAttributes).map(key => {
                if(car[key] != carAttributes[key])
                {
                    isEqual = false;
                }
                console.log(`${key}:${car[key]} , ${key}:${carAttributes[key]}`);
            });
            if(isEqual)
            {
                carsFound.push(car);
            }            
        }  
        if(!carsFound.length)      
        {
            throw new ApiError(404, "cars not found!");
        }
        return carsFound;
    }

    async buyCar(carID: string): Promise<void> 
    {
        await this.findCarByCode(carID);         
        return this.cars.forEach(car => 
        {
            if(car.id == carID)
            {
                              
            }
        });
    }

    async findUserCars(userID: string): Promise<Car[]> 
    {
        const salesWithUser = this.sales.filter(sale => sale.ownerID === userID); 
      
        if(!salesWithUser.length)
        {
            throw new ApiError(404, "sales not found!");
        }

        const ids = salesWithUser.map(sale => {
            return sale.carID
        });                
        
        return this.cars.filter(car => ids.includes(car.id));
    }

    async saveCar(car: CarDto): Promise<void> 
    {        
        throw new Error();
    }
}