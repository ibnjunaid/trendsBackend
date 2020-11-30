import express, { json, Request, Response } from 'express';
import { client } from '../Commons/Configs';
import { getTrendByTime } from './dbQuery';

const routes = express.Router();

const mongo =   client.connect();

routes.get('/',(req,res)=>{
    res.send("Hello World . hit trend/:Woeid?Ttime");
})

//This path get $Woeid as URI Parameter and $Ttime as query parameters 
//Woeid : Integer
//Ttime : ISO date String
routes.get('/trend/:Woeid',async (req,res)=>{
    const resp = await getTrendByTime(Number(req.params.Woeid),Number(req.query.Ttime),mongo);
    res.send(resp[0]);
})

routes.get('/test',async(req,res)=>{
    res.send(`res Recieved form ${req.ip}`);
})

export default routes;