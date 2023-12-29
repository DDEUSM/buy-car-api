import { UserDto } from "../../application/data-transfer-objects/UserDto";

export interface IUsersRepository
{
    createUser(newUser: UserDto): Promise<void>;
    findUserByID (userID: string): Promise<UserDto | void>;
}