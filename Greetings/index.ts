import { Greeter } from "./src/greeter";
import { HtmlGreeter } from "./src/html-greeter";
import { JavaScriptGreeter } from "./src/javascript-greeter";
import { LoudGreeter } from "./src/loud-greeter";


let greeter = new Greeter("Hello");
console.log(greeter.Greet("Ketta"));

let htmlGreeter = new HtmlGreeter("Goodbye");
console.log(htmlGreeter.Greet("Nicole"));

let javascriptGreeter = new JavaScriptGreeter("Hi");
console.log(javascriptGreeter.Greet("Trina"));

let loudGreeter = new LoudGreeter("Bye");
console.log(loudGreeter.Greet("Fanta"));