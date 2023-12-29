import { IPermissionsRepository } from "../../../repository-contracts/IPermissionsRepository";

export class PermissionsRepository implements IPermissionsRepository
{
    async getPermission(userID: string, carID: string): Promise<boolean>
    {
        return true;
    }

    async checkClientPermission(userGroupID: string, carCategoryID: string): Promise<boolean> 
    {
        const permission = await this.getPermission(userGroupID, carCategoryID);
        if(!permission)
        {
            return false;
        }
        return true;     
    }
}