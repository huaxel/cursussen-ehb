import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
let getal = parseInt(await userInput.question('Geef me een getal: '));

let fibo = 0
let a = 0
let b = 1

while (a <= getal){    
    fibo = a
    let c = a + b
    a = b
    b = c
    console.log(fibo)
}

userInput.close()