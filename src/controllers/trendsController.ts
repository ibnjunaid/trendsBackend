import urlencode, {decode} from 'urlencode'
import {Request,Response} from 'express';
import { trendObject } from '../models/Trend.Model';
import { ByNamePipe, 
        sortByMaxTweetVolume, 
        TrendingLocationsPipe,
        ByWoeidAndDatePipe, 
        FirstTrending} from '../utils/pipelines';

export const getTrendByPlaceName = async (req:Request, res:Response) => {
    try { 
        const placeName = urlencode.decode(String(req.query.placeName))

        const data = await trendObject.aggregate(ByNamePipe(placeName));
        
        if(data.length){
            res.json({
                status : true,
                message : `Fetched data for woeid : ${placeName}`,
                data : data
            })
        } else {
            res.status(404)
                .json({
                    status : false,
                    message : `Data Doesn't exist for ${placeName}`
                })
        }
    } catch (error) {
        console.error(error);
        res.status(500)
            .json({
                status : false,
                message : `Internal Server error`
            })
    }
}

export const getTrendByWoeidAndTime = async (req:Request, res:Response) =>{
    try {
        const woeid = req.body.woeid;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;

        const data = await trendObject.aggregate(ByWoeidAndDatePipe(woeid,startTime,endTime))

        if(data.length){
            res.json({
                status : true,
                message : `Fetched data for woeid ${woeid}`,
                data : data 
            })
        } else {
            res.status(404)
                .json({
                    status : false,
                    message : `Data Doesn't exist for ${woeid}`
                })
        }
    } catch (error) {
        console.error(error);
        res.status(500)
            .json({
                status : false,
                message : `Internal Server error`
            })
    }
}

export const getTrendsWithMaxTweetVolume = async (req:Request, res:Response) => {

    try { 
        const data = await trendObject.aggregate(sortByMaxTweetVolume);
        if(data){
            res.json({
                status : true,
                message : `Fetched data for max tweet volumes`,
                data : data 
            })
        } else {
            res.status(404)
                .json({
                    status : false,
                    message : "Check if your collection is empty"
                })
        }
    } catch (error) {
        console.error(error);
        res.status(500)
            .json({
                status : false,
                message : `Internal Server error`
            })
    }   
}

export const getTrendDetails = async (req:Request, res :Response) => {
    try {
        const pipeline = TrendingLocationsPipe(req.body.trend);
 
        const trendingLocations = await trendObject.aggregate(pipeline);
        // const firstSeen  = ( await trendObject.aggregate(FirstTrending(req.body.trend)))[0] || {} 

        if(trendingLocations.length){
            res.json({
                status : true,
                message : `Sucessfully fetched locations for trend : ${req.body.trend}`,
                data : {
                        // firstSeen : firstSeen,
                        trendingLocations
                    }
            })
        }
        else {
            res.status(404)
                .json({
                    status : false,
                    message : `Trend ${req.body.trend} Doesn't Exist`
                })
        }
    } catch (error) {
        console.error(error);
        res.status(500)
            .json({
                status : false,
                message : `Internal Server error`
        })
    }
}