//Gebruik een switch/case om te controleren hoeveel dagen de variabele maand heeft.
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('Geef me een maand waarvoor je het aantal dagen wil weten: ');
let dagen = 0;
switch (maand){
    case 'januari':
    case 'maart':
    case 'mei': 
    case 'juli':
    case 'augustus':
    case 'oktober': 
    case 'december':
        dagen = 31;
        break;
    case 'februari':
        dagen = '28 of 29';
        break;
    case 'april':
    case 'juni':
    case 'september': 
    case 'november':
        dagen = 30;
        break;
    default:
        console.log('Geef een valabele maand.')
} 

console.log(`De maand ${maand} heeft ${dagen} dagen.`);
userInput.close();