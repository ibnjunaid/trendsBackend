import {Router} from 'express';
import {Ping,redirectOnRoot} from '../controllers/rootController';

const routes = Router();

routes.get('',redirectOnRoot);

routes.get('/ping',Ping);

export default routes;