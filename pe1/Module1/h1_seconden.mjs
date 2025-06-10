// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let dagen = parseFloat(await userInput.question('Geef het aantal dagen: '));
let uren = parseFloat(await userInput.question('Geef het aantal uren: '));
let minuten = parseFloat(await userInput.question('Geef het aantal minuten: '));
let seconden = parseFloat(await userInput.question('Geef het aantal seconden: '));

console.log(`Aantal seconden: ${(((dagen * 24) + uren) * 60 + minuten) * 60 + seconden}`);

userInput.close(); // Sluit de interface