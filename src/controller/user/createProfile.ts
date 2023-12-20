import { Response, Request } from "express";

export function createProfile(req: Request, res: Response)
{
    res.json({message: "Create a Profile."});
}