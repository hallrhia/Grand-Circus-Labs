import { IRacer } from "../Interfaces/IRacer";

export function findRacersWithEmptyFuel(racers:IRacer[]) : IRacer[] {
    let newArray:IRacer[] = [];
    
    for(let racer of racers){
        if(racer.isFuelEmpty()){
             newArray.push(racer);
        } 
    } return newArray;

    // return racers.filter((x) => x.isFuelEmpty());
}

export function findAverageSpeed(racers:IRacer[]) : number {
    let totalSpeed = 0;

    if(racers.length === 0){
        return 0;
    }
    for(let racer of racers){
        totalSpeed += racer.speed;
    }

    return totalSpeed / racers.length;
}

export function getFasterRacer(racerA:IRacer, racerB:IRacer) : IRacer | null {
    if(racerA.speed > racerB.speed){
        return racerA;
    } 
    else if(racerA.speed < racerB.speed){
        return racerB;
    } 
    else {
        return null;
    }
}