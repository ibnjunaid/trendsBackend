import express, { Router } from 'express';
import {
     getTrendByPlaceName,
     getTrendByWoeidAndTime,
     getTrendsWithMaxTweetVolume,
     getTrendDetails
} from '../controllers/trendsController';

const routes = express.Router();

routes.get('/by-place',getTrendByPlaceName);

routes.get('/by-woeid-and-time',getTrendByWoeidAndTime);

routes.get('/with-max-tweet-volume',getTrendsWithMaxTweetVolume);

routes.post('/trend-details',getTrendDetails);

export default routes;