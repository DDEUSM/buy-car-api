import { Router } from "express";
import carRouter from "../car";
import userRouter from "../user";

const routes = Router();
carRouter(routes);
userRouter(routes);

export default routes;