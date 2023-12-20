import { Request, Response } from "express";

export function allCars(req: Request, res: Response)
{
    res.json({ message : "All cars" });
}