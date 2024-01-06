import { IHttpServer } from "../../../domain/server-contracts/IHttpServer";
import { ViewCarsUseCase } from "../../../application/useCases/view-cars/ViewCarsUseCase";
import { ViewCarByIDUseCase } from "../../../application/useCases/view-car-by-id/ViewCarByIDUseCase";
import { BuyCarUseCase } from "../../../application/useCases/buy-car/BuyCarUseCase";
import { ViewGarageCarsUseCase } from "../../../application/useCases/view-cars-garage/ViewGarageCarsUseCase";
import { ICarsRepository } from "../../repository-contracts/ICarsRepository";
import { IUsersRepository } from "../../repository-contracts/IUsersRepository";
import { ISalesRepository } from "../../repository-contracts/ISalesRepository";
import { IPermissionsRepository } from "../../repository-contracts/IPermissionsRepository";

export default class CarsRoutes
{
    private carsRepository: ICarsRepository;
    private usersRepository: IUsersRepository;
    private salesRepository: ISalesRepository;
    private permissionsRepository: IPermissionsRepository
    ;
    constructor (
        private server: IHttpServer,
        repositories: any,
    ){
        this.carsRepository = repositories.carsRepository;
        this.usersRepository = repositories.usersRepository;
        this.permissionsRepository = repositories.permissionsRepository
        this.salesRepository = repositories.salesRepository;
    }

    setRoutes()
    {
        this.server.on("post", "/cars", async (params: any, body: any) => 
        {
            const viewCarsUseCase = new ViewCarsUseCase(this.carsRepository);            
            const cars =  await viewCarsUseCase.execute(body);
            return { 
                statusCode: 200,
                body: cars
            };                         
        }); 
        
        this.server.on("get","/car/:carID", async (params: any, body: any) => 
        {
            const viewCarByIDUseCase = new ViewCarByIDUseCase(this.carsRepository);
            const car =  await viewCarByIDUseCase.execute(params.carID);
            return {
                statusCode: 200,
                body: car
            };
        }); 

        this.server.on("post","/buy-car", async (params: any, body: any) => 
        {
            const buyCarUseCase = new BuyCarUseCase(
                this.carsRepository,
                this.salesRepository,
                this.permissionsRepository,
                this.usersRepository
            );
            await buyCarUseCase.execute(body.carID, body.userID);
            return {
                statusCode: 200,
                body: {}
            };
        });

        this.server.on("get","/garage-cars/:userID", async (params: any, body: any) => 
        {
            const viewGarageCarsUseCase = new ViewGarageCarsUseCase(this.carsRepository);
            const cars = await viewGarageCarsUseCase.execute(params.carID);
            return {
                statusCode: 200,
                body: cars
            };
        });
    }
    
}





