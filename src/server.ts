import { ExpressAdapter } from "./infra/server-adapter/ExpressAdapter";
import { CarRepository, PermissionsRepository, SalesRepository, UsersRepository } from "./infra/repositories/implementations/postgreSQLRepositories";
import { SetupRoutes } from "./infra/router/config/SetupRoutes";
import dotenv from "dotenv";
import { PostgreSQLAdapter } from "./infra/repositories/database/PostgreSQLAdapter";
import { SetupMiddlewares } from "./infra/middleware/config/SetupMiddlewares";

const expressServer = new ExpressAdapter();
dotenv.config();

const postgresConnection = new PostgreSQLAdapter();

const repositories = {
    carsRepository: new CarRepository(postgresConnection),
    usersRepository: new UsersRepository(),
    permissionsRepository: new PermissionsRepository(),
    salesRepisotory: new SalesRepository()
};

const setupRoutes = new SetupRoutes(expressServer, repositories);
setupRoutes.execute();

const setupMiddlewares = new SetupMiddlewares(expressServer);
setupMiddlewares.execute();

expressServer.listen(Number(process.env.PORT));


