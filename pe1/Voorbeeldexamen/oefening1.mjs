import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question("Hoeveel random getallen wil je genereren? "));

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getallen = [];
let evenGetallen = 0; // Initialize evenGetallen to 0

for (let i = 0; i < getal; i++) {
    let randomGetal = random(1, 10);
    getallen.push(randomGetal); // Use push instead of append
    if (randomGetal % 2 === 0) {
        evenGetallen++;
    }    
}

console.log(`De random getallen zijn: ${getallen}`);
console.log(`Het aantal even getallen is: ${evenGetallen}`);


process.exit();
