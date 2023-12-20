import { Response, Request } from "express";

export function login(req: Request, res: Response)
{
    res.json({message: "Login"});
}