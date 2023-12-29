export interface IPermissionsRepository 
{
    checkClientPermission(userID: string, carID: string): Promise<boolean>    
}