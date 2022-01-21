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


const interval = 900000;
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const endPoints1 = [
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/samao",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/ritikh",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/dzai",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/zaid2"
];


const endPoints2 = [
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/samao2",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/ritikh2",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/dzai2",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/zaid2II"
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


cron.schedule('0 0 0 * * 0',async() =>{
    console.log('Cron  Called on ' ,Date().toString());
    await Promise.all([deleteOldTrends(),getNewPlaces()])
})


// Run every 32 minute and time a function to run after 16 minutes

const i2 = setInterval(()=>{
    console.log(`Fetch2 Registered on ${(new Date).toString()}`);
    fetchTrends(endPoints2)
    .then(console.log)
    .catch((error) =>{
        console.error("An error Occured on Fetch2: ");
        console.error(new Date().toString(),error.message)
    })
    setTimeout(()=>{
        console.log(`Fetch1  Registered on ${(new Date).toString()}`);
        fetchTrends(endPoints1)
        .then(console.log)
        .catch((error) =>{
            console.error("An error Occured on Fetch1: ");
            console.error(new Date().toString(),error.message)
        })
    },16*60*1000)
},32*60*1000)


app.listen(PORT,HOST,()=>{
    console.log('Server started on', new Date().toString())
    console.log(`Server listening on ${PORT}`)
});

