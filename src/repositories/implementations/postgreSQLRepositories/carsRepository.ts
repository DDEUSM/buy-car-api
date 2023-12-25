import { TCar } from "../../../entities/cars";
import { ICarsRepository } from "../../ICarsRepository";
import { cars } from "../../../dataForTest/Cars";
import { TSales } from "../../../entities/sales";
import { Sales } from "../../../dataForTest/Sales";

export class CarRepository implements ICarsRepository
{
    private cars: TCar[] = cars;
    private sales: TSales[] = Sales;

    async findCarByCode(carCode: string): Promise<TCar | void> 
    {
        return this.cars.find(car => car.id == carCode);        
    }

    async findCarsByModel(carModel: string): Promise<TCar[] | void>  
    {        
        return this.cars.filter(car => car.model === carModel);
    }

    async buyCar(carID: string): Promise<void> 
    {
        return this.cars.forEach(car => {
            if(car.id == carID)
            {
                car.unitsAvailable --;
                console.log("// Carros //");
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