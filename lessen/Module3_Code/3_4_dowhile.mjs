// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten

let getal;

do{
   getal = parseFloat(await userInput.question('Geef een getal tussen 1 en 10 in: '));
}while(getal < 1 || getal > 10);

console.log('Je gekozen getal is '+ getal);

process.exit();