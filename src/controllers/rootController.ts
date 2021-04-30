import { Request, Response } from "express";

export const Ping = async (req:Request, res:Response) => {
    res.send(`Ping recevied by ${req.ip}`);
}

export const redirectOnRoot = async (req:Request, res: Response) => {
    res.redirect('https://twittertrends.netlify.app');
}