class Greeter{
    greeting:string;

    constructor(greeting:string){
        this.greeting = greeting;
    }

    Greet(name:string) {
       return `${this.greeting}, ${name}!`;
    }
}

export { Greeter }