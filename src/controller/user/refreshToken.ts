import { Response, Request } from "express";

export function refreshToken(req: Request, res: Response)
{
    res.json({message: "Refresh token."});
}