import { NextFunction,Request,Response } from "express";
import PlaceModel from "../models/Place.Model";

export const getAllPlaces  = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const place = await PlaceModel.findOne({},{_id:0,places:1}).lean();
        res.send(place);
    } catch (error) {
        console.log(error);
    }
} 