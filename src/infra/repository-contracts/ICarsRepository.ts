import { CarDto } from "../../application/data-transfer-objects/CarDto";
import { Car } from "../../domain/entities/cars";

export interface ICarsRepository
{
    saveCar(car: CarDto): Promise<void>;
    find(carAttributes: any): Promise<Car[]>;
    findCarByCode(carID: string): Promise<Car>;
    buyCar(carID: string): Promise<void>;
    findUserCars(userID: string): Promise<Car[]>;
}