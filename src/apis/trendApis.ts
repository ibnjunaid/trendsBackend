import express, { Router } from 'express';
import {
     getTrendByWoeid,
     getTrendByWoeidAndTime,
     getTrendsWithMaxTweetVolume,
     getLocationsWhereTrending
} from '../controllers/trendsController';

const routes = express.Router();

routes.get('/by-woeid',getTrendByWoeid);

routes.get('/by-woeid-and-time',getTrendByWoeidAndTime);

routes.get('/with-max-tweet-volume',getTrendsWithMaxTweetVolume);

routes.get('/all-location',getLocationsWhereTrending);

export default routes;