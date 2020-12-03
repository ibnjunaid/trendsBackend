import { MongoClient } from 'mongodb';
import { databaseName } from '../Commons/Configs'
import { findPlaceByWoeid, replaceSpaceAndDotsWith_ } from '../Commons/Woeid-methods';


export async function getTrendByTime(Woeid:number,Ttime :number,conn: Promise<MongoClient>) {
    try{
        const timeRange = findtimeRange(Ttime);
        const connection = await conn;
    
        const dbResp = await connection.db(databaseName)
                            .collection(replaceSpaceAndDotsWith_(findPlaceByWoeid(Woeid)?.name||''))
                            .find({as_of: {$gt : new Date(timeRange.min), $lt : new Date(timeRange.max)}})
                            .toArray();
        return dbResp;
    }catch(err){
        console.error(err);
    }

}

function findtimeRange(timeStamp:number){
    const t = new Date(timeStamp);
    const hrs = t.valueOf() - t.getMinutes()*60*1000 - t.getSeconds()*1000 - t.getMilliseconds();
    const min = hrs; // min is HH:00:00:000
    const max = hrs + 59*60*1000 + 59*1000 + 999; // max is HH:59:59:999
    return { min : min, max: max};
}

export async function getTrendByWoeid(Woeid:number, conn: Promise<MongoClient>){
    try{
        const connection = await conn;

        const dbResp = await connection.db(databaseName)
                             .collection( replaceSpaceAndDotsWith_( findPlaceByWoeid(Woeid) ?.name || '') )
                             .find({}).limit(24).sort({"as_of":-1})
                             .toArray();
        return dbResp;        
    }catch (error) {
        console.error(error);
    }
}