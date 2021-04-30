import {Router} from 'express';
import { getAllPlaces } from '../controllers/placesController';

const routes = Router();

routes.get('/get-all-places',getAllPlaces);

export default routes;