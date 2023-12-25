import { uuid } from "uuidv4";
import { TSales } from "../entities/sales";
import { ICarsRepository } from "../repositories/ICarsRepository";
import { ISalesRepository } from "../repositories/ISalesRepository";
import { IPermissionsRepository } from "../repositories/IPermissionsRepository";
import { AuthorizationError } from "../errors/AuthorizationError";
import { IUsersRepository } from "../repositories/IUsersRepository";

export class BuyCarUseCase
{
    constructor(

        private carsRepository: ICarsRepository,
        private salesRepository: ISalesRepository,
        private permissionsRepository: IPermissionsRepository,
        private usersRepository: IUsersRepository
    ){}

    async execute(carID: string, userID: string): Promise<void>
    {

        const car = await this.carsRepository.findCarByCode(carID);

        if(!car)
        {
            throw new Error("This car its unavailable!");
        }

        const user = await this.usersRepository.findUserByID(userID);

        if(!user)
        {
            throw new Error("This user not exists!");
        }

        const userIsPermited = await this.permissionsRepository.checkClientPermission(userID, carID);

        if(!userIsPermited)
        {
            throw new AuthorizationError("User Group has not authorized", 400);
        }

        await this.carsRepository.buyCar(carID);        

        const newSale: TSales = {

            id: uuid(),
            carID: carID,
            ownerID: userID
        }

        return await this.salesRepository.addNewSale(newSale);        
    }
}