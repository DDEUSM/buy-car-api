
import { UserDto } from "../../../../application/data-transfer-objects/UserDto";
import { IUsersRepository } from "../../../repository-contracts/IUsersRepository";
import { Users } from "../../../../dataForTest/Users";

export class UsersRepository implements IUsersRepository
{
    private users: UserDto[] = Users;

    async createUser(newUser: UserDto): Promise<void> 
    {
        const userNotExists = this.users.filter(user => user.id === newUser.id);
        if(userNotExists.length > 0)
        {
            console.log("Este usuário já existe!");
            return;
        }    
        this.users.push(newUser);
    }

    async findUserByID(userID: string): Promise<UserDto | void> 
    {
        const user = this.users.find(user => user.id === userID);

        if(!user)
        {
            return;
        }

        return user;
        
    }
}