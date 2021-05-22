import {Router} from 'express';
import {Ping,NotFound} from '../controllers/rootController';

const routes = Router();

routes.get('/ping',Ping);



export default routes;