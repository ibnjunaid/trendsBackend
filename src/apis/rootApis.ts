import {Router} from 'express';
import {Ping} from '../controllers/rootController';

const routes = Router();

routes.get('/ping',Ping);

export default routes;