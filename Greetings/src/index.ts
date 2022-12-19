import { Greeter } from "../src/greeter"
import { HtmlGreeter } from "../src/html-greeter"
import { JavaScriptGreeter } from "../src/javascript-greeter"
import { LoudGreeter } from "../src/loud-greeter"

let greeter = new Greeter("Hello");
greeter.Greet("Ketta");

let htmlGreeter = new HtmlGreeter("Goodbye");
htmlGreeter.Greet("Nicole");

let javascriptGreeter = new JavaScriptGreeter("Hi");
javascriptGreeter.Greet("Trina");

let loudGreeter = new LoudGreeter("Bye");
loudGreeter.Greet("Fanta");