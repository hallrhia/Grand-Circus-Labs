import { JavaScriptGreeter } from "../src/javascript-greeter";

describe("JavaScriptGreeter tests", () => {
    test("console.log(Bye, Felicia!)", () => {
        let test = new JavaScriptGreeter("Bye");

        expect(test.Greet("Felicia")).toBe("console.log(Bye, Felicia!)");
    });
    test("console.log(Later, Hater!)", () => {
        let test = new JavaScriptGreeter("Later");

        expect(test.Greet("Hater")).toBe("console.log(Later, Hater!)");
    });
})