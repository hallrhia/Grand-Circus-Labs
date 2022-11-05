const numbersButton = document.getElementById("numbers");
const lettersButton = document.getElementById("letters");
let letters = document.getElementById("letterrows");
let numbers = document.getElementById("numberrow");

numbersButton.addEventListener("click", clickNumbers);

function clickNumbers() {
  numbers.style.display = "block";
  letters.style.display = "none";
}

lettersButton.addEventListener("click", clickLetters);

function clickLetters() {
  letters.style.display = "block";
  numbers.style.display = "none";
}
