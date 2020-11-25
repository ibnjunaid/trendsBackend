import express from 'express';
import * as path from 'path';
import cors from 'cors';
import routes from './routes';



const app = express();

app.use('/static', express.static(path.join(__dirname, '../public')))

//Route to different paths 
app.use(routes);

app.use(cors);

app.listen(8080,"localhost",()=>{
    console.log(`Server listening on http://localhost:8080`)
});