import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
let rondes = parseInt(await userInput.question('Geef me een aantal rondes: '));

let counter = 0
let fibo = 0
let a = 0
let b = 1

while (counter <= rondes){ 
    counter++   
    fibo = a
    let c = a + b
    a = b
    b = c
    console.log(fibo)
}

userInput.close()