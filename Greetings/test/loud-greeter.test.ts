import { LoudGreeter } from "../src/loud-greeter";


describe("LoudGreeter tests", () => {
    test("greet no addVolume", () => {
        let test = new LoudGreeter("Hi");
        
        expect(test.Greet("Angela")).toBe("Hi, Angela!!");
    });  
    test("call greet and call addvolume once", () => {
        let test = new LoudGreeter("Hi");
        
        test.addVolume();   
        expect(test.Greet("Jane")).toBe("Hi, Jane!!!");
    });
    test("call greet and call addvolume twice", () => {
        let test = new LoudGreeter("Hi");
       
        test.addVolume(); 
        test.addVolume();  
        expect(test.Greet("Jane")).toBe("Hi, Jane!!!!");
    });   
})