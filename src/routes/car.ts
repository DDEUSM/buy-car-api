import { Router } from "express";
import * as carController from "../controller/car";

export default function(routes: Router)
{
    routes.get("/cars", carController.allCars);
    routes.get("/car/:id", carController.car);
    routes.get("/buy-car", carController.buyCar);
}





