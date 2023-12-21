import { ICarsRepository } from "../repositories/ICarRepository";

export class Users 
{
    constructor(

       private carRepository: ICarsRepository,       
    ){}    

    buyCar()
    {
        //GROUP COMUM - APENAS CARROS COMUNS DE RUA
        //GROUP RACER - TODOS OS CARROS, INCLUSIVE OS DE CORRIDA
    }

    async viewCars(model: string)
    {
        return await this.carRepository.findCarsByModel(model);        
    }

    async viewCar(carCode: string)
    {
        return await this.carRepository.findCarByCode(carCode);
    }
}