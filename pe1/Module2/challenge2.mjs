/*
We gaan E3 en H1 met elkaar combineren. 
Vraag aan de gebruiker zowel een maand als een jaar. 
Geef het aantal dagen in die maand terug aan de gebruiker. 
Gebruik zowel een if/else als een switch/case structuur in je oplossing
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
const jaartal = parseInt(await userInput.question("Geef me een jaartal: "));
const maand = await userInput.question('Geef me een maand waarvoor je het aantal dagen wil weten: ');

const schrikkeljaar = ((jaartal % 4 == 0 && jaartal % 100 != 0)|| jaartal %400 == 0);

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
        dagen = schrikkeljaar ? 29 : 28;
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

console.log(`De maand ${maand} van ${jaartal} heeft ${dagen} dagen.`);
userInput.close();
