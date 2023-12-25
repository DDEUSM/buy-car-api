import { ViewGarageCarsController } from "../controller/viewGarageCars";
import { CarRepository } from "../repositories/implementations/postgreSQLRepositories/carsRepository";
import { ViewGarageCarsUseCase } from "../useCases/ViewGarageCarsUseCase";

const carsRepository = new CarRepository();

const viewGarageCarsUseCase = new ViewGarageCarsUseCase(carsRepository);

const viewGarageCarsController = new ViewGarageCarsController(viewGarageCarsUseCase);

export { viewGarageCarsController, viewGarageCarsUseCase };