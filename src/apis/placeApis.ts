import {Router} from 'express';
import { getAllPlaces } from '../controllers/placesController';
import { NotFound } from '../controllers/rootController';


const routes = Router();

routes.get('/get-all-places',getAllPlaces);

routes.get('/*',NotFound);

routes.post('/*',NotFound);

export default routes;