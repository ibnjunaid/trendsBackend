export interface place{
    name : string,
    woeid : number,
    placeType : {name : string, code : number }
    country : string,
    url : string,
    countryCode : string,
    parentid: number
}

export interface trend{
    name : string,
    url : string,
    promoted_content : boolean | null,
    query : string,
    tweet_volume : number
}

export interface location{
    name : String,
    woeid : Number,
}

export interface twitterResponse{
    trends : Array<trend>,
    as_of : Date ,
    created_at : Date,
    locations : Array<location>
}

//Server Interfaces 

export interface Trend{
    index :number,
    name : String,
    tweet_volume : number
    url : String,
}

export interface frontEndResponse{
    as_of : Date | any,
    location : Array<location>,
    trends : Array<Trend>
}