import woeidList from '../data/WOEID.json';

//find the place by Woeid
export function findPlaceByWoeid(Woeid :number){
    return woeidList.find((d) => d.woeid == Woeid);
}
        
//Replace spaces with _ so that it can be used for collection naming 
export function replaceSpaceWith_(name :string) {
    return name.replace(' ','_');
}