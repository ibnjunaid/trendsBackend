/*******************************************************
 * Copyright (C) 2010-2011 Osamabinjunaid <Osamabinjunaid36@gmail.com>
 * 
 * This file is part of trendsVisualizer.
 * 
 * TrendsVisualizer can not be copied and/or distributed without the express
 * permission of Osama Bin Junaid
 *******************************************************/

/*##############################
* This is file is the entry to the App.
* setInterval calls the start() after each 59 minutes passed
* start() loops over the woeidList and passes an object of type place and index to distributeWork
* distributeWork() limits the request by sending only 74 request in a 15 minutes window 
* fetchAndPause() helps by fetching and saving only 74 request and pausing for 17 minutes
* sleep() returns a promise which resloves after *ms milliseconds 
################################*/

import {app} from './Server/server'
import {fetchAndSaveTrends} from './Fetcher/fetcher'
import woeidList from './data/WOEID.json';
import { place } from './Commons/interfaces';
import { databaseName, URI ,TWITTER_TOKEN_ONE,TWITTER_TOKEN_TWO,TWITTER_TOKEN_THREE  } from './Commons/Configs';
import mongoose = require("mongoose");


const min = 1000*60;
const interval = 59*min;

const conn =  mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology: true,dbName:databaseName});


function sleep(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function fetchAndPause(woeid: number, mul : number , token: string){
    await sleep(mul * min);
    await fetchAndSaveTrends(woeid,conn,token);
}

async function distributeWork(d:place,i:number){
    if(i < 74){
        await fetchAndPause(d.woeid,0,TWITTER_TOKEN_ONE);
    }else if(i >= 74 && i <= 148){
        await fetchAndPause(d.woeid,17,TWITTER_TOKEN_TWO);
    }else if(i >= 149 &&  i<= 222){
        await fetchAndPause(d.woeid,35,TWITTER_TOKEN_THREE);
    }else{
        console.error(`Check Woeid : if it contains more than 222 places`);
    }
}

async function start(){
    console.log(`Fetch Started at ${ new Date() }`)
    woeidList.forEach(distributeWork);
}


app.listen(8080,"localhost",()=>{
    console.log(`Server listening on http://localhost:8080`)
});

start()
.catch(err=>{console.log("ERROR IS BEING HANDELED")});

const intervalID = setInterval(()=>{
    console.log(`Fetch Registred at ${new Date()}`);
    start();
},interval);

