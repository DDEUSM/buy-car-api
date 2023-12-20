import { Router } from "express";
import * as userController from "../controller/user";

export default function(routes: Router)
{
    routes.get("/login", userController.createProfile);

    routes.get("/create-profile", userController.createProfile);
    routes.get("/read-profile", userController.readProfile);
    routes.get("/create-update", userController.updateProfile);
    routes.get("/delete-profile", userController.deleteProfile);

    routes.get("/refresh-token", userController.refreshToken);    
}

