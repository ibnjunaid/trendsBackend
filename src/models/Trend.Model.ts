import {Schema,model,Document} from "mongoose";
import {location,trend, twitterResponse} from '../utils/interfaces';

const responseSchema = new Schema({
    trends : {
        type : Array<trend>()
    },
    as_of : Date,
    created_at : Date,
    name : String,
    woeid : Number
},{
    timestamps : true
})

interface trendObjectInterface extends Document{
    trends : {
        type : Array<trend>
    },
    as_of : Date,
    created_at : Date,
    name : String,
    woeid : Number
};

export const trendObject = model<any>('trend',responseSchema);

