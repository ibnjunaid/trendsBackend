import express from 'express';
import { MongoClient } from 'mongodb';
import * as path from 'path';
import { frontEndResponse,Trend ,twitterResponse,trend} from '../Commons/interfaces';
import cors from 'cors';
import routes from './routes';



const app = express();

app.use('/static', express.static(path.join(__dirname, '../public')))

//Route to different paths 
app.use(routes);

app.listen(8080,"localhost",()=>{
    console.log(`Server listening on http://localhost:8080`)
});