function previousWeekTime(){
    const milliSecinWeek = 1000*60*60*24*7;
    const t = new Date();
    const dayinMs = t.valueOf()  - t.getHours()*60*60*1000 - t.getMinutes()*60*1000 - t.getSeconds()*1000 - t.getMilliseconds();
    return dayinMs - milliSecinWeek;
}

console.log(new Date(previousWeekTime()).toUTCString())