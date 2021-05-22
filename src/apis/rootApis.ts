import {Router} from 'express';
import {Ping,NotFound} from '../controllers/rootController';

const routes = Router();

routes.get('/ping',Ping);

routes.get('/*',NotFound);

routes.post('/*',NotFound);

export default routes;