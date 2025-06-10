// input boilerplate
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
// input boilerplate

let perDag = parseFloat(await userInput.question('Hoeveel koppen drink je per dag?'));

console.log(`Op een jaar zal je ${perDag * 365} koppen drinken`)

userInput.close(); // Sluit de interface