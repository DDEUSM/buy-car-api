import { Router } from "express";
import carRouter from "../cars";


const routes = Router();
carRouter(routes);

export default routes;