/*
    * Node-cron weekly run functions in this file 
 * 1. getNewPlaces : updates the places collection 
 * 2.  deleteOldTrends : remove trends which are a week old; 
*/

import axios from 'axios';
import PlaceModel from '../models/Place.Model';
import { place } from './interfaces';
import { trendObject } from '../models/Trend.Model';
import {subWeeks} from 'date-fns';


export const getNewPlaces = async () => {
    try {
        const data = (await axios.get<Array<place>>(`https://api.twitter.com/1.1/trends/available.json`,{
            headers : {
                'Authorization' : `Bearer ${process.env.TWITTER_TOKEN}`
            }
        })).data;
        if(data){
            const placesData = new PlaceModel();
            placesData.places = data;
            const savedDoc = await placesData.save();
            if(savedDoc){
                console.log(`Places saved with ${savedDoc._id}`)
                const Docs = await PlaceModel.find({createdAt : {$lt: savedDoc.createdAt}});
                const removedDocs = await Promise.all(Docs.map(async (d) => await d.remove())) ;
                console.log(`Number of Previous Doc removed ${removedDocs.length}`);
            } else {
                throw "Cant save Document";
            }
        } else {
            throw "Cannot fetch data from twitter API.";
        }
    } catch (error) {
        console.error(error);
        console.error("An error occured while saving place");
    }
}


export const deleteOldTrends = async() =>{
    try {
        const dateNow = new Date();
        const previousWeek  = subWeeks( dateNow , 1);
        const deletedDocs = await trendObject.deleteMany({createdAt : {
            $lt : previousWeek
        }})
        console.log(deletedDocs?.deletedCount)
    } catch (err) {
        console.error(err);
    }
}