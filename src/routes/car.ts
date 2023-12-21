import { Router, Response, Request } from "express";
import * as carController from "../controller/car";

export default function(routes: Router)
{
    routes.get("/cars", (req: Request, res: Response) => {
        return 
    });
    routes.get("/car/:id", carController.car);
}





