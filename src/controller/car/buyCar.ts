import { Request, Response } from "express";

export function buyCar(req: Request, res: Response)
{
    res.json({ message : "Buying a car!" });
}
