import { MongoClient } from 'mongodb';

export const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017"
export const client = new MongoClient(URI,{useUnifiedTopology:true});
export const dbName = "trends";