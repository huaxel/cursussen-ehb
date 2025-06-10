import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question('Geef een getal: '));

let isPrime = true;

for (let i = 2 ; i <= Math.sqrt(getal); i++){
    if (getal % i == 0){
        isPrime = false;
        break;
    }
}

const result = isPrime ? 'een priemgetal.' : 'geen priemgetal.'

console.log(`${getal} is ${result}`)

userInput.close()
