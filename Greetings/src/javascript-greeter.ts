import { Greeter } from "../src/greeter"

class JavaScriptGreeter extends Greeter {
    constructor(greeting:string){
        super(greeting);
    }

    Greet(name:string) : string {
      return `console.log(${this.greeting}, ${name}!)`;
     }
}

export { JavaScriptGreeter }