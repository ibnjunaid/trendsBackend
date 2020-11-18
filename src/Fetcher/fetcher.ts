import axios from 'axios';
import mongoose = require("mongoose");

import token from './creds';
import {frontEndResponse, Trend, trend, twitterResponse} from '../Commons/interfaces';
import {responseSchema} from './Trend.Model'
import { dbName, URI } from '../Commons/mongoConfigs';
import { findPlaceByWoeid, replaceSpaceWith_ } from '../Commons/Woeid-methods';

//Set Twitter API token Here 
axios.defaults.headers.common['Authorization'] = token.twitterToken;

async function start(Woeid:number) {
    //connect to mongod Instance
    await mongoose.connect(`${URI}/${dbName}`,{useNewUrlParser:true,useUnifiedTopology: true});

    //fetch and parse  data
    const responseData = await getTrendsByCountry(Woeid);

    //if responseData is returned, implies that the woeid exist 
    if(responseData) {

        //find the place by Woeid
        const match  = findPlaceByWoeid(Woeid);
        //Replace spaces with _ so that it can be used for collection naming;
        const place = replaceSpaceWith_(match?.name||'');

        //Create a model for that place   
        const trendModel = mongoose.model(place,responseSchema,place);

        // Add data to that model
        const trendresponseData = new trendModel({
            trends : responseData?.trends,
            as_of : responseData?.as_of,
            locations : responseData?.location
        });
    
        // Save the model to the database
        const savedDoc = await trendresponseData.save();

        if (savedDoc){
            console.info(`Data Saved with id : ${savedDoc._id}`);
        }
    } else {
        //if reponseData is undefined write to stderr
        console.error("No response Data Received");
    }
}


/* 
    * arg : woeid - A number uniquely idenifying places 
    * fetches the data and passes to parseResponse function for adding trend index
    * and remove unnecessary data    
*/
async function getTrendsByCountry(woeid:number){
    try {
        const response = await axios.get<Array<twitterResponse>>(`https://api.twitter.com/1.1/trends/place.json?id=${woeid}`);
        return parseResponse(response.data[0]);
    }
    catch (err) {
        console.log(err);
    }
}


function parseResponse(responseData:twitterResponse){
    const Response : frontEndResponse = {
        trends : responseData.trends.map((d,i) => parseTrend(d,i)).filter((d) => d.index < 11),
        as_of : responseData.as_of,
        location : responseData.locations
    }
    return Response;
}

const parseTrend = (d:trend,i:number) => {
    let t : Trend = {
        index : i+1,
        name : d.name,
        tweet_volume : d.tweet_volume,
        url : d.url
    };
    return t;
}