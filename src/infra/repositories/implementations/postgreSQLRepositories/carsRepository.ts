import { TCar } from "../../../../domain/entities/cars";
import { ICarsRepository } from "../../../repository-contracts/ICarsRepository";
import { cars } from "../../../../dataForTest/Cars";
import { TSales } from "../../../../domain/entities/sales";
import { Sales } from "../../../../dataForTest/Sales";

export class CarRepository implements ICarsRepository
{
    private cars: TCar[] = cars;
    private sales: TSales[] = Sales;

    async findCarByCode(carCode: string): Promise<TCar | void> 
    {
        return this.cars.find(car => car.id == carCode);        
    }

    async find(carAttributes: any): Promise<TCar[] | void>  
    {   
        console.log("// car attr //");     
        console.log(carAttributes);
        const carsFound: TCar[] = [];
        

        for(let car of this.cars)
        {
            let isEqual = true;
            console.log("");
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
        console.log("// car found //");
        console.log(carsFound);
        return carsFound;
    }

    async buyCar(carID: string): Promise<void> 
    {
        return this.cars.forEach(car => {
            if(car.id == carID)
            {
                car.unitsAvailable --;
                console.log("// Carro comprado //");
                console.log(car);
            }
        });
    }

    async findUserCars(userID: string): Promise<[] | TCar[]> 
    {
        const salesWithUser = this.sales.filter(sale => sale.ownerID === userID); 
      
        if(salesWithUser.length < 1)
        {
            return [];
        }

        const ids = salesWithUser.map(sale => {
            return sale.carID
        });                

        return this.cars.filter(car => ids.includes(car.id));
    }
}