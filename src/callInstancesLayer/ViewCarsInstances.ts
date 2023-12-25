import { ViewCarsController } from "../controller/viewCars";
import { CarRepository } from "../repositories/implementations/postgreSQLRepositories/carsRepository";
import { ViewCarsUseCase } from "../useCases/ViewCarsUseCase";

const carsRepository = new CarRepository();

const viewCarsUseCase = new ViewCarsUseCase(carsRepository);

const viewCarsController = new ViewCarsController(viewCarsUseCase);

export { viewCarsController, viewCarsUseCase };