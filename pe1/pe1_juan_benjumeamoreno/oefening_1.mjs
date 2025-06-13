import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = 0;
let aantal = 0;
let som = 0;
 
while (true) {
  getal = parseFloat(await userInput.question("Geef een getal: "));
  if (getal < 0) break;
  if (getal % 2 == 0 && getal >= 0) {
    som += getal;
    aantal += 1;
  }
}

let gemiddelde = som / aantal;

console.log(`Gemiddelde van alle positieve even getallen: ${gemiddelde > 0 ? gemiddelde : 0}`);

userInput.close();
process.exit();
