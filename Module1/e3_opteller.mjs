// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(await userInput.question('Geef me een eerste nummer: '));
let getal2 = parseFloat(await userInput.question('Geef me een tweede nummer: '));

console.log(`De som is: ${getal1 + getal2}`);

userInput.close(); // Sluit de interface