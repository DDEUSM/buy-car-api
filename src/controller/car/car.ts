import { Request, Response } from "express";

export function car(req: Request, res: Response)
{
    res.json({ message : "One car" });
}