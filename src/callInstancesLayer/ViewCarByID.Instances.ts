import { ViewCarByIDController } from "../controller/viewCarByID";
import { CarRepository } from "../repositories/implementations/postgreSQLRepositories/carsRepository";
import { ViewCarByIDUseCase } from "../useCases/ViewCarByIDUseCase";

const carsRepository = new CarRepository();

const viewCarByIDUseCase = new ViewCarByIDUseCase(carsRepository);

const viewCarByIDController = new ViewCarByIDController(viewCarByIDUseCase);

export { viewCarByIDController, viewCarByIDUseCase };