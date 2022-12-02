function translate(word) {
    word = word.toLowerCase();

    let vowels = ["a", "e", "i", "o", "u"];
    let newWord = "";

    if (vowels.indexOf(word[0]) > -1) {
        newWord = word + "way";
        return newWord;
    }

    else {
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
        return newWord;
    }
}
module.exports = translate;