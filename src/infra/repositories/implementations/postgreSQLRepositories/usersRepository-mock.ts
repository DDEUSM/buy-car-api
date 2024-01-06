
import { UserDto } from "../../../../application/data-transfer-objects/UserDto";
import { IUsersRepository } from "../../../repository-contracts/IUsersRepository";
import { Users } from "../../../../dataForTest/Users";
import { ApiError } from "../../../../domain/errors/ApiError";

export class UsersRepository implements IUsersRepository
{
    private users: UserDto[] = Users;

    async createUser(newUser: UserDto): Promise<void> 
    {
        const userNotExists = this.users.filter(user => user.id === newUser.id);
        if(userNotExists.length > 0)
        {            
            throw new ApiError(400, "User already exists!");
        }    
        this.users.push(newUser);
    }

    async findUserByID(userID: string): Promise<UserDto | void> 
    {
        const user = this.users.find(user => user.id === userID);
        if(!user)
        {
            throw new ApiError(404, "User not exists!");
        }
        return user;
        
    }
}