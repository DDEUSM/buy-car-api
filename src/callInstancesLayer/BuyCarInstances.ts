import { BuyCarController } from "../controller/buyCar";
import { CarRepository } from "../repositories/implementations/postgreSQLRepositories/carsRepository";
import { PermissionsRepository } from "../repositories/implementations/postgreSQLRepositories/permissionsRepository";
import { SalesRepository } from "../repositories/implementations/postgreSQLRepositories/salesRepository";
import { UsersRepository } from "../repositories/implementations/postgreSQLRepositories/usersRepository";
import { BuyCarUseCase } from "../useCases/BuyCarUseCase";

const carsRepository = new CarRepository();

const salesRepository = new SalesRepository();

const permissionsRepository = new PermissionsRepository();

const usersRepository = new UsersRepository()

const buyCarUseCase = new BuyCarUseCase(

    carsRepository,
    salesRepository,
    permissionsRepository,
    usersRepository
);

const buyCarController = new BuyCarController(buyCarUseCase);

export { buyCarController, buyCarUseCase };