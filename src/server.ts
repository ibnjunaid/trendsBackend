import express from 'express';
import * as path from 'path';
import cors from 'cors';
import trendApis from './apis/trendApis';
import mongoose from 'mongoose';
import rootApis from './apis/rootApis';
import placeApis from './apis/placeApis';
import bodyParser from 'body-parser';
import compression from 'compression';
const morgan = require('morgan')


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

//Use compression 
app.use(compression());

app.use(express.static(path.join(__dirname, '../public/')));

//Allow Cross Origin Resource Sharing 
app.use(cors());


app.use(morgan("dev"));

//Route to different paths
app.use('/apis/',rootApis);
app.use('/apis/trends',trendApis);
app.use('/place',placeApis);


//404 route matches when none of the above pattern matches
app.get('/*',(req,res,) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"),(err)=>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }
    })
})