import {client, dbName} from '../Commons/mongoConfigs'
import { findPlaceByWoeid, replaceSpaceWith_ } from '../Commons/Woeid-methods';


export async function getTrendByTime(Woeid:number,Ttime :number) {
    let Query = new Date(Ttime);
    const connection =  await client.connect();

    const timeRange = findtimeRange(Ttime);

    const dbResp = await connection.db('trends')
                        .collection(replaceSpaceWith_(findPlaceByWoeid(Woeid)?.name||''))
                        .find({as_of: {$gt : new Date(timeRange.min), $lt : new Date(timeRange.max)}})
                        .toArray();
    return dbResp;
}

function findtimeRange(timeStamp:number){
    const t = new Date(timeStamp);
    const hrs = t.valueOf() - t.getMinutes()*60*1000 - t.getSeconds()*1000 - t.getMilliseconds();
    const min = hrs; // min is HH:00:00:000
    const max = hrs + 59*60*1000 + 59*1000 + 999; // max is HH:59:59:999
    return { min : min, max: max};
}