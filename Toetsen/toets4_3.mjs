// input boilerplate
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
// input boilerplate

let celsius = parseFloat(await userInput.question('Wat is de temperatuur in celsius?'));

console.log(`In fahrenheit is het ${(celsius * 9/5)+32} graden`)

userInput.close(); // Sluit de interface