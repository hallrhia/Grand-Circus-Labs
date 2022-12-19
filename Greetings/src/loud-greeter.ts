import { Greeter } from "../src/greeter"

class LoudGreeter extends Greeter {
    private extra:string;

    constructor(greeting:string, extra:string = ""){
        super(greeting);

        this.extra = extra;
    }

    addVolume() : void {
        this.extra += "!";
    }

    Greet(name:string) {
        return `${this.greeting}, ${name}!!${this.extra}`;
     }

}

export { LoudGreeter }