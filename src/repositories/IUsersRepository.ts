import { TUsers } from "../entities/users"

export interface IUsersRepository
{
    findUserByID (userID: string): Promise<TUsers | void>;
}