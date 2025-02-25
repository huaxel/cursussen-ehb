import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let getal1 = 22;
let getal2 = "33";

console.log(`Je getallen waren ${getal1} en ${getal2}`);
console.log(`De som is: ${getal1 * getal2}`);
console.log(`Het verschil is: ${getal1 - getal2}`);
console.log(`Het product is: ${getal1*getal2}`);
console.log(`De deling is: ${getal1/getal2}`)

userInput.close(); // Sluit de interface