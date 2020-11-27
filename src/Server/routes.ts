import express, { json, Request, Response } from 'express';
import { client } from '../Commons/Configs';
import { getTrendByTime } from './dbQuery';

const routes = express.Router();

const mongo =   client.connect();

routes.get('/',(req,res)=>{
    res.redirect('/static/');
})

//This path get $Woeid as URI Parameter and $Ttime as query parameters 
//Woeid : Integer
//Ttime : ISO date String
routes.get('/trend/:Woeid',async (req,res)=>{
    const resp = await getTrendByTime(Number(req.params.Woeid),Number(req.query.Ttime),mongo);
    res.send(resp[0]);
})


export default routes;