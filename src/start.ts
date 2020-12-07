/*******************************************************
 * 2020 Osamabinjunaid <Osamabinjunaid36@gmail.com>
 * 
 * This file is part of trendsVisualizer.
 *******************************************************/

/*##############################
* This is file is the entry to the App.
* fetechInterval is a timer that calls the fetchTrends() after each 16 minutes passed
* sleep() returns a promise which resloves after *ms milliseconds 
* fetchTrends sleeps so as to prevent huge number of database connections
################################*/

import {app} from './Server/server'
import axios from 'axios'


const min = 1000*60;
const interval = 16*min;
const PORT = Number(process.env.PORT);
const HOST = process.env.HOST || '0.0.0.0';

const endPoints = [
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/param75",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/param150",
    "https://eu-gb.functions.appdomain.cloud/api/v1/web/Oibm_dev/default/param225"
];

function sleep(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function fetchTrends(){
    return Promise.all(endPoints.map(async (d) => {
        await sleep(10) ; 
        const res = await axios.get(d);
        return res.data;
    }));
}


app.listen(PORT,HOST,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
});


fetchTrends()
    .then(console.log)
    .catch(console.error);


const fetchInterval = setInterval(()=>{
    console.log(`Fetch Registered on ${new Date}`);
    fetchTrends()
    .then(console.log)
    .catch(console.error)
},interval)

const pingSelfInterval = setInterval(async ()=>{
    await axios.get("https://trendsend.herokuapp.com/test");
},30000);