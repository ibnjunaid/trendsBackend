import express from 'express';
import * as path from 'path';
import cors from 'cors';
import trendApis from './apis/trendApis';
import mongoose from 'mongoose';
import rootApis from './apis/rootApis';
import placeApis from './apis/placeApis';
import bodyParser from 'body-parser';
import compression from 'compression';

mongoose.connect(process.env.ATLAS_MONGO_URI ||'',{
    useNewUrlParser : true,
    useUnifiedTopology : true
},(err)=>{
    if(err){
        console.error("An error occured connecting to ALTAS");
        throw err;
    } else {
        console.log(`In convo with ATlas`);
    }
})

export const app = express();

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '../../public')))

//Allow Cross Origin Resource Sharing 
app.use(cors());

//Use compression 
app.use(compression());


//Route to different paths
app.use('',rootApis);
app.use('/trends/',trendApis);
app.use('/place',placeApis)

//404 route matches when none of the above pattern matches
app.use((req,res,next) =>{
    console.log(req.url);
    res.status(404).send({
        url: req.url,
        message : "Doesn't exist"
    })
})