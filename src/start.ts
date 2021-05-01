/*******************************************************
 * 2020 Osamabinjunaid <Osamabinjunaid36@gmail.com>
 * 
 * This file is part of trendsVisualizer.
 *******************************************************/

/*##############################
* This is file is the entry to the App.
* fetchInterval is a timer that calls the fetchTrends() after each 16 minutes passed
* sleep() returns a promise which resloves after *ms milliseconds 
* fetchTrends sleeps so as to prevent huge number of database connections
################################*/
import {app} from './server';
import axios from 'axios';

import cron from 'node-cron';
import { deleteOldTrends, getNewPlaces } from './utils/weeklyFuncs';


const interval = 16*1000*60;
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const endPoints1 = [
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/samao",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/ritikh",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/dzai"
];

const endPoints2 = [
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/samao2",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/ritikh2",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/dzai2"
]

function sleep(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function fetchTrends(endPoints:string[]){
    return Promise.all(endPoints.map(async (d) => {
        await sleep(10) ; 
        const res = await axios.get(d);
        return res.data;
    }));
}


//Run every 16 minute
const fetchInterval1 = setInterval(()=>{
    console.log(`Fetch Registered on ${new Date}`);
    fetchTrends(endPoints1)
    .then(console.log)
    .catch(console.error)
},interval)


//Run every 32 minute 
const fetchInterval2 = setInterval(()=>{
    console.log(`Fetch Registered on ${new Date}`);
    fetchTrends(endPoints2)
    .then(console.log)
    .catch(console.error)
},interval*2);

app.listen(PORT,HOST,()=>{
    console.log(`Server listening on ${PORT}`)
});

// This function basically prevents heroku 
// from turing of the server because of inactivity
const pingSelfInterval = setInterval(async ()=>{
    try {
        await axios.get("https://trendsend.herokuapp.com/ping");
    } catch (error) {
        console.error("What the hell !! Cant ping self");
    }
},30000);


cron.schedule('0 0 * * 0',async() =>{
    await Promise.all([deleteOldTrends(),getNewPlaces()])
})
