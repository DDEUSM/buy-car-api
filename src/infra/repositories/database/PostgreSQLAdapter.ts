import pgp from "pg-promise";
import { IConnection } from "../../database-contracts/IConnection";

export class PostgreSQLAdapter implements IConnection
{
    private connection: any = pgp()("postgres://postgres:1234@localhost:5432/granturismo");

    async query(statement: string, values: any): Promise<any> 
    {
        return await this.connection.query(statement, values);       
    }

    async one(statement: string, values: any): Promise<any> 
    {
        return await this.connection.one(statement, values);
    }

    async close(): Promise<void> 
    {
        await this.connection.$pool.end();
    }
    
}