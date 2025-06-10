import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
let inputString = await userInput.question('Geef me twee getallen: ');

let getallen = inputString.split(' ').map(Number);
let getal1 = getallen[0]
let getal2 = getallen[1]

while (getal2 != 0){ 
    let temp = getal2;
    getal2 = getal1 % getal2;
    getal1 = temp;
}
console.log(`De grootste gemene deler is ${getal1}`)

userInput.close()