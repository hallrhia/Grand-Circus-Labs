import { Greeter } from "../src/greeter"

class LoudGreeter extends Greeter {
    private extra:string;

    constructor(greeting:string, extra:string = "!"){
        super(greeting);

        this.extra = extra;
    }

    addVolume() : void {
        this.extra + this.extra;
    }

    Greet(name:string) {
        return `${this.greeting}, ${name}!!`;
     }

}

export { LoudGreeter }