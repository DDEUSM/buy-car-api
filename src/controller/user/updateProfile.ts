import { Response, Request } from "express";

export function updateProfile(req: Request, res: Response)
{
    res.json({message: "Update a Profile."});
}