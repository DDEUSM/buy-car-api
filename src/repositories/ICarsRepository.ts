import { TCar } from "../entities/cars";

export interface ICarsRepository
{
    findCarsByModel(carModel: string): Promise<TCar[] | void>;
    findCarByCode(carID: string): Promise<TCar | void>;
    buyCar(carID: string): Promise<void>;
    findUserCars(userID: string): Promise<TCar[] | []>;
}