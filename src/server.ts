import { ExpressAdapter } from "./infra/server-adapter/ExpressAdapter";
import { CarRepository, PermissionsRepository, SalesRepository, UsersRepository } from "./infra/repositories/implementations/postgreSQLRepositories";
import { SetupRoutes } from "./infra/router/config/SetupRoutes";
import dotenv from "dotenv";

const expressServer = new ExpressAdapter();
dotenv.config();

const repositories = {
    carsRepository: new CarRepository(),
    usersRepository: new UsersRepository(),
    permissionsRepository: new PermissionsRepository(),
    salesRepisotory: new SalesRepository()
};

const router = new SetupRoutes(expressServer, repositories);
router.execute();

expressServer.listen(Number(process.env.PORT));


