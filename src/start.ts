/* 
* This file initialises the app
*/

import {app} from './Server/server'
import {fetchAndSaveTrends} from './Fetcher/fetcher'

app.listen(8080,"localhost",()=>{
    console.log(`Server listening on http://localhost:8080`)
});

const interval = 60*1000*10;

setInterval(()=>{
    fetchAndSaveTrends(1);
},interval);