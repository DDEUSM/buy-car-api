import { TCar } from "../../../domain/entities/cars";
import { TSales } from "../../../domain/entities/sales";
import { ICarsRepository } from "../../../infra/repository-contracts/ICarsRepository";
import { TCarAttributes } from "./types";

export class ViewCarsUseCase 
{
    constructor(

       private carsRepositories: ICarsRepository,       
    ){} 
    
    clearInputs(carAttributes: TCarAttributes): any 
    {
        const valuesOfCarAttr = Object.values(carAttributes);
        const keysOfCarAttr = Object.keys(carAttributes);

        const cleanedInputs = valuesOfCarAttr.reduce((cleanedObject: any, value, index) => 
        {
            value? cleanedObject[keysOfCarAttr[index]] = value : null;
            return cleanedObject;
        }, {});

        return cleanedInputs;
    }

    async execute(carAttributes: any): Promise<TCar[]>
    {
        const cleanInputs = this.clearInputs(carAttributes);

        const cars = await this.carsRepositories.find(cleanInputs);                    
        if(!cars)
        {
            throw new Error("This cars not exists!");
        }
        return cars;
    }

}

