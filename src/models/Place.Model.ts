import {Schema,model,Document} from "mongoose";
import { place } from "../utils/interfaces";

const PlaceSchema = new Schema({
    createdAt : Date,
    places : {
        type : Array<place>()
    }
},{
    timestamps : true
})


interface placeInterface extends Document{
    createdAt: Date | any;
    places : Array<place>
};

const PlaceModel = model<placeInterface>('place',PlaceSchema)

export default PlaceModel;
