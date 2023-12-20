import { Response, Request } from "express";

export function deleteProfile(req: Request, res: Response)
{
    res.json({message: "Delete a Profile."});
}