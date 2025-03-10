// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten


let jeGetal = parseFloat(await userInput.question('Geef een getal in: '));
console.log('Je getal maal 2 is gelijk aan '+ (jeGetal * 2));


process.exit();