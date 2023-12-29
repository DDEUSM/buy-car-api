import { IUsersRepository } from "../../../infra/repository-contracts/IUsersRepository";
import { UserDto } from "../../data-transfer-objects/UserDto";

export default class GetUserByIDUseCase
{
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute(id: string): Promise<UserDto | void>
    {
        const userExists = await this.usersRepository.findUserByID(id);
        return userExists? userExists : undefined;
    }
}