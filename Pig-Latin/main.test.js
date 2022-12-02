const translate = require("./main")

describe("translation function", () => {
    test("starts with a", () => {
        expect(translate("apple")).toEqual("appleway");
    });
    test("starts with e", () => {
        expect(translate("else")).toEqual("elseway");
    });
    test("starts with i", () => {
        expect(translate("idiot")).toEqual("idiotway");
    });
    test("starts with o", () => {
        expect(translate("opal")).toEqual("opalway");
    });
    test("starts with u", () => {
        expect(translate("under")).toEqual("underway");
    });
    test("starts with a consonant with second letter i", () => {
        expect(translate("giraffe")).toEqual("iraffegay");
    });
    test("starts with a consonant with second letter o ", () => {
        expect(translate("woke")).toEqual("okeway");
    });
    test("starts with 2 consonants", () => {
        expect(translate("break")).toEqual("eakbray");
    });
    test("starts with 3 consonants", () => {
        expect(translate("scream")).toEqual("eamscray");
    });
    test("starts with capitalized vowel", () => {
        expect(translate("Orange")).toEqual("orangeway");
    });
    test("word without vowel", () => {
        expect(translate("myth")).toEqual("mythay");
    });
})