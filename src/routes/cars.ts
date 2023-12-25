import { Router, Response, Request } from "express";
import { viewCarsController } from "../callInstancesLayer/ViewCarsInstances";
import { buyCarController } from "../callInstancesLayer/BuyCarInstances";
import { viewCarByIDController } from "../callInstancesLayer/ViewCarByID.Instances";
import { viewGarageCarsController } from "../callInstancesLayer/ViewGarageCarsInstances";


export default function(routes: Router)
{
    routes.get("/cars", (req: Request, res: Response) => 
    {
        return viewCarsController.handle(req, res);
    }); 
    
    routes.get("/car/:carID", (req: Request, res: Response) => 
    {
        return viewCarByIDController.handle(req, res);
    }); 

    routes.post("/buy-car", (req: Request, res: Response) => 
    {
        return buyCarController.handle(req, res);
    })

    routes.get("/garage-cars/:userID", (req: Request, res: Response) => 
    {
        return viewGarageCarsController.handle(req, res);
    })
}





