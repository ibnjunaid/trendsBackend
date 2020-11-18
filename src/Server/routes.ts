import express, { json, Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import {client, dbName} from '../Commons/mongoConfigs'
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.redirect('/static/');
})

//This path get $Woeid as URI Parameter and $Ttime as query parameters 
//Woeid : Integer
//Ttime : ISO date String
routes.get('/trend/:Woeid',(req,res)=>{
    //To Do
    res.send(`Received : ${req.params.Woeid}, ${req.query.Ttime}`);
})

routes.get('/trendBytime/',(req,res)=>{

})

routes.get('/trendByLocation/:Woeid')

routes.get('/trendByVolume')


//Handler functions

async function getTrendByTime(req: express.Request<ParamsDictionary>,res: express.Response) {
    let Query = new Date(req.params.Ttime);
    if( isNaN(Query.valueOf()) ){
        Query = new Date();
    }
    const connection = await client.connect();
    const dbResp = await connection.db(dbName)
                        .collection("trends")
                        .find({"as_of": Query})
                        .toArray();
    res.send(JSON.stringify(dbResp[0]));
}

async function getIndex(req:express.Request<ParamsDictionary>,res:express.Response){
    res.send("Under Construction");
}



export default routes;