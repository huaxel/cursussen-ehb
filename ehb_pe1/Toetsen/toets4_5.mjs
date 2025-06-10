// input boilerplate
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
// input boilerplate

let som = 0;

som += parseFloat(await userInput.question('Voer het eerste getal in: '));
som += parseFloat(await userInput.question('Voer het tweede getal in: '));
som += parseFloat(await userInput.question('Voer het derde getal in: '));
som += parseFloat(await userInput.question('Voer het vierde getal in: '));

let gemiddelde = som / 4;
console.log(gemiddelde);
userInput.close(); 