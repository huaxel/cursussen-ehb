import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let sum = 0;
let average = 0;
let counter = 0;

while (average <= 25){
    let getal = parseInt(await userInput.question('Geef me een getal: '));
    counter++;
    sum+= getal;
    average = sum / counter
    console.log(`Het gemiddelde is momenteel ${average.toFixed(2)}`)
}
console.log(`Het gemiddelde is ${average.toFixed(2)}`)

userInput.close()