import { IUsersRepository } from "../../../infra/repository-contracts/IUsersRepository";
import { UserDto } from "../../data-transfer-objects/UserDto";
import { User } from "../../../domain/entities/users";

export class CreateUserUseCase
{
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute (userInput: UserDto): Promise<void>
    {
        const newUser = new User(
            userInput.id,
            userInput.firstName,
            userInput.lastName,
            userInput.email,
            userInput.password,
            userInput.driverGroupId, 
            userInput.credits
        );        
        
        

        const newUserDto = new UserDto(
            newUser.id,
            newUser.firstName,
            newUser.lastName,
            newUser.email,
            newUser.passwordHash,
            newUser.driverGroupID,
            newUser.credits
        );

        console.log("user dto");
        console.log(newUserDto);

        return await this.usersRepository.createUser(newUserDto);
    }
}