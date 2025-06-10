/* Vraag twee getallen aan de gebruiker. 
Vraag vervolgens aan de gebruiker of hij deze wilt optellen, aftrekken, vermenigvuldigen of delen.
Voor die operatie uit en geef het resultaat terug.
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let eerstegetal = parseFloat(await userInput.question('Geef me een eerste getal: '))
let tweedegetal = parseFloat(await userInput.question('Geef me een tweede getal: '))
let keuze = await userInput.question('Wat wil je hiermee doen:\n1. Optellen\n2. Aftrekken\n3. Vermenigvuldigen\n4. Delen\n');
let resultaat = '0';

switch (keuze){
    case '1':
        resultaat = eerstegetal + tweedegetal;
        console.log(`Je koos ervoor om ${eerstegetal} en ${tweedegetal} op te tellen. Het resultaat is ${resultaat}`)
        break;
    case '2':
        resultaat = eerstegetal - tweedegetal;
        console.log(`Je koos ervoor om ${tweedegetal} van ${eerstegetal} af te trekken. Het resultaat is ${resultaat}`)
        break;
    case '3':
        resultaat = eerstegetal * tweedegetal;
        console.log(`Je koos ervoor om ${eerstegetal} met ${tweedegetal} te vermenigvuldigen. Het resultaat is ${resultaat}`)
        break;
    case '4':
        resultaat = eerstegetal / tweedegetal;
        console.log(`Je koos ervoor om ${eerstegetal} door ${tweedegetal} te delen. Het resultaat is ${resultaat.toFixed(2)}`)
        break; 
    default:
        console.log('Geef een valabele keuze')
} 

userInput.close();