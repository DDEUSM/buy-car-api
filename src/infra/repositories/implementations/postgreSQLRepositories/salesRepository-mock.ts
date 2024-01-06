import { Sales } from "../../../../dataForTest/Sales";
import { TSales } from "../../../../domain/entities/sales";
import { ApiError } from "../../../../domain/errors/ApiError";
import { ISalesRepository } from "../../../repository-contracts/ISalesRepository";

export class SalesRepository implements ISalesRepository
{
    private sales: TSales[] = Sales;

    async addNewSale(sale: TSales): Promise<void> 
    {
        this.sales.push(sale);                
    }

    async findSalesByUser(userID: string): Promise<TSales[]> 
    {
        const sales = this.sales.filter(sale => sale.ownerID == userID);
        if(!sales.length)
        {
            throw new ApiError(404, "Sales not exists!");
        }
        return sales;
    }

}