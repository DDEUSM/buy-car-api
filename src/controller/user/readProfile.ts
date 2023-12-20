import { Response, Request } from "express";

export function readProfile(req: Request, res: Response)
{
    res.json({message: "Read a Profile."});
}