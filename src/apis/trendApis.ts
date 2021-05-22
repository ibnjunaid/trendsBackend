import express, { Router } from 'express';
import {
     getTrendByPlaceName,
     getTrendByWoeidAndTime,
     getTrendsWithMaxTweetVolume,
     getTrendDetails
} from '../controllers/trendsController';

import { NotFound } from '../controllers/rootController';

const routes = express.Router();

routes.get('/by-place',getTrendByPlaceName);

routes.get('/by-woeid-and-time',getTrendByWoeidAndTime);

routes.get('/with-max-tweet-volume',getTrendsWithMaxTweetVolume);

routes.post('/trend-details',getTrendDetails);

routes.get('/*',NotFound);


export default routes;