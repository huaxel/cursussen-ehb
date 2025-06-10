import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question('Geef een getal: '));
let divisor = getal; 

for (let i = getal - 1 ; i > 1 ; i--) {
    if(getal%i === 0){
        divisor = i;
        break;
    }
}

const result = divisor != getal ? "geen priemgetal." : "een priemgetal.";

console.log(`${getal} is ${result}`);

userInput.close();