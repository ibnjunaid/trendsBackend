import { MongoClient } from 'mongodb';
require('dotenv').config();

export const URI = process.env.ALTAS_MONGO_URI || '';
export const TWITTER_TOKEN = process.env.TWITTER_TOKEN ||'';
export const databaseName = "trends";
export const client = new MongoClient(URI,{useUnifiedTopology:true});
