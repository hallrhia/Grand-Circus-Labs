let characters = [
  { name: "Cairren", health: 85 },
  { name: "Padraig", health: 65 },
  { name: "Innes", health: 72 },
];

let opponent = { name: "Myrna", health: 90 };

for (let character of characters) {
  console.log(character);
}

console.log(opponent);

//Prompts the user to pick a character by number (1, 2, or 3).

let chooseCharacter = Number(prompt("Please choose a character by number", ""));
console.log(`You chose character number ${chooseCharacter}`);
