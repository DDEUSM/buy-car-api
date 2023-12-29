import { TCar } from "../../domain/entities/cars";

export interface ICarsRepository
{
    find(carAttributes: any): Promise<TCar[] | void>;
    findCarByCode(carID: string): Promise<TCar | void>;
    buyCar(carID: string): Promise<void>;
    findUserCars(userID: string): Promise<TCar[] | []>;
}