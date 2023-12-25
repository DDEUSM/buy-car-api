import { TSales } from "../entities/sales";

export interface ISalesRepository
{
    addNewSale(sale: TSales): Promise<void>;
    findSalesByUser(userID: string): Promise<TSales[]>;    
}