import { Greeter } from "../src/greeter"

describe("Greeter tests", () => {
    test("Hello, Dani!", () => {
        let testGreeting = new Greeter("Hello");

        expect(testGreeting.Greet("Dani")).toBe("Hello, Dani!");
    });
    test("Au Revoir, Michele!", () => {
        let testGreeting = new Greeter("Au Revoir");
              
        expect(testGreeting.Greet("Michele")).toBe("Au Revoir, Michele!");
    });
})
