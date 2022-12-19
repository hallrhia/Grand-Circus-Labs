import { HtmlGreeter } from "../src/html-greeter";


 describe("HtmlGreeter tests", () => {
        test("greeting is Hello, Jane! with H2 tag", () => {
            let test = new HtmlGreeter("Hello", "h2");
            
            expect(test.Greet("Jane")).toBe("<h2>Hello, Jane!</h2>");
        });
        test("greeting is Goodbye, Anne! with default tag", () => {
            let test = new HtmlGreeter("Goodbye");
            
            expect(test.Greet("Anne")).toBe("<h1>Goodbye, Anne!</h1>");
        });
        test("greeting is See you later, Cara! with p tag", () => {
            let test = new HtmlGreeter("See you later", "p");
            
            expect(test.Greet("Cara")).toBe("<p>See you later, Cara!</p>");
        });
        test("greeting is Good Luck, Jill! with span tag", () => {
            let test = new HtmlGreeter("Good luck", "span");
            
            expect(test.Greet("Jill")).toBe("<span>Good luck, Jill!</span>");
        });
        test("greeting is Have a good weekend, Sequoyia! with div tag", () => {
            let test = new HtmlGreeter("Have a good weekend", "div");
            
            expect(test.Greet("Sequoyia")).toBe("<div>Have a good weekend, Sequoyia!</div>");
        });
        test("greeting is Aloha, April! with default tag", () => {
            let test = new HtmlGreeter("Aloha");
            
            expect(test.Greet("April")).toBe("<h1>Aloha, April!</h1>");
        });
    })
