import { ICar } from "../entities/car";

export interface ICarsRepository
{
    findCarsByModel(carModel: string): Promise<ICar[]>;
    findCarByCode(carCode: string): Promise<ICar>;
}