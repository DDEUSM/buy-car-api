import { isVoidExpression } from "typescript";
import { TUsers } from "../../../entities/users";
import { IUsersRepository } from "../../IUsersRepository";
import { Users } from "../../../dataForTest/Users";

export class UsersRepository implements IUsersRepository
{
    private users: TUsers[] = Users;

    async findUserByID(userID: string): Promise<TUsers | void> 
    {
        const user = this.users.find(user => user.id === userID);

        if(!user)
        {
            return;
        }

        return user;
        
    }
}