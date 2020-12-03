import express from 'express';
import { getTrendByTime,getTrendByWoeid } from './dbQuery';
import { MongoClient } from 'mongodb';


const DB_URI = process.env.ATLAS_MONGO_URI || '';
const routes = express.Router();

const client = new MongoClient(DB_URI,{useUnifiedTopology:true});

const mongo =   client.connect();

routes.get('/',(req,res)=>{
    res.send("Hello World . hit trend/:Woeid?Ttime");
})

//This path get $Woeid as URI Parameter and $Ttime as query parameters 
//Woeid : Integer
//Ttime : ISO date String
routes.get('/trend/:Woeid',async (req,res)=>{
    const resp = await getTrendByTime(Number(req.params.Woeid),Number(req.query.Ttime),mongo) ||[];
    res.send(resp[0]);
})

routes.get('/test',async(req,res)=>{
    res.send(`req Recieved form ${req.ip}`);
})

routes.get('/t/:Woeid',async(req,res)=>{
    const resp = await getTrendByWoeid(Number(req.params.Woeid),mongo);
    res.send(resp);
})

export default routes;