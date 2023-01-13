import { IRacer } from "../Interfaces/IRacer";

//concrete or concretion

export class SolarCar implements IRacer {
    team:string;
    speed:number;

    constructor(team:string){
        this.team = team;
        this.speed = 0;
    }

    accelerate() : void {
         this.speed += 1 ;
    }
    
    isFuelEmpty() : boolean {
        return false;
    }

}

