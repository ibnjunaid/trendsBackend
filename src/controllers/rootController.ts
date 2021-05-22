import { Request, Response } from "express";

export const Ping = async (req:Request, res:Response) => {
    res.send(`Ping recevied by ${req.ip}`);
}


export const NotFound = async (req:Request, res:Response) => {
    res.sendStatus(404);
}
