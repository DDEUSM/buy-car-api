import { uuid } from "uuidv4";
import { TSales } from "../../../domain/entities/sales";
import { ICarsRepository } from "../../../infra/repository-contracts/ICarsRepository";
import { ISalesRepository } from "../../../infra/repository-contracts/ISalesRepository";
import { IPermissionsRepository } from "../../../infra/repository-contracts/IPermissionsRepository";
import { IUsersRepository } from "../../../infra/repository-contracts/IUsersRepository";

export class BuyCarUseCase
{
    constructor (
        private carsRepository: ICarsRepository,
        private salesRepository: ISalesRepository,
        private permissionsRepository: IPermissionsRepository,
        private usersRepository: IUsersRepository
    ){}

    async execute(carID: string, userID: string): Promise<void>
    {
        const car = await this.carsRepository.findCarByCode(carID);

        const user = await this.usersRepository.findUserByID(userID);        

        const userIsPermited = await this.permissionsRepository.checkClientPermission(userID, carID);

        await this.carsRepository.buyCar(carID);        

        const newSale: TSales = {

            id: uuid(),
            carID: carID,
            ownerID: userID
        }

        return await this.salesRepository.addNewSale(newSale);        
    }
}