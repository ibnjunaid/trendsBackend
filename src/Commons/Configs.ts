import { MongoClient } from 'mongodb';
require('dotenv').config();

export const URI = process.env.ALTAS_MONGO_URI || '';
export const TWITTER_TOKEN_ONE = process.env.TWITTER_TOKEN_ONE ||'';
export const TWITTER_TOKEN_TWO = process.env.TWITTER_TOKEN_TWO ||'';
export const TWITTER_TOKEN_THREE = process.env.TWITTER_TOKEN_THREE ||'';
export const databaseName = "trends";
export const client = new MongoClient(URI,{useUnifiedTopology:true});
