// Maak een programma dat getallen blijft inlezen tot het getal 45 wordt ingelezen. Geef het gemiddelde van alle getallen die kleiner of gelijk aan 10 zijn. Zie voorbeelduitvoer.

// Voorbeelduitvoer 1:

// 7
// 10
// 14
// -2
// 11
// 45
// Gemiddelde van getallen kleiner of gelijk aan 10: 5

// Voorbeelduitvoer 2:

// 10
// 12
// 45
// Gemiddelde van getallen kleiner of gelijk aan 10: 10
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

let getallen = [];
let som=0;
let aantal=0;

const userInput = readline.createInterface({ input, output });
let getalInput;

do {
  getalInput = parseInt(await userInput.question("Geef me een getal? "));
  getallen.push(getalInput);
  if (getalInput <= 10) {
    som += getalInput;
    aantal++;
  }
} while (getalInput != 45);

let gemiddelde = som / aantal

for (let getal of getallen){
  console.log(getal);
}

console.log(`Gemiddelde van getallen kleiner of gelijk aan 10: ${gemiddelde}`);

process.exit();
