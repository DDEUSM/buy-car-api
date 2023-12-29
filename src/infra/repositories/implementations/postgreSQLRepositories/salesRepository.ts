import { Sales } from "../../../../dataForTest/Sales";
import { TSales } from "../../../../domain/entities/sales";
import { ISalesRepository } from "../../../repository-contracts/ISalesRepository";

export class SalesRepository implements ISalesRepository
{
    private sales: TSales[] = Sales;

    async addNewSale(sale: TSales): Promise<void> 
    {
        this.sales.push(sale);
        console.log("// VENDAS //");
        console.log(this.sales);
        console.log("// vendas geral //")
        console.log(Sales);
    }

    async findSalesByUser(userID: string): Promise<TSales[]> 
    {
        return this.sales.filter(sale => sale.ownerID == userID);
        
    }

}