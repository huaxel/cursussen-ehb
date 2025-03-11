/*
Schrijf een script dat gebruik maakt 
van een variabele number en aan de hand 
van die variabele en één of meerdere lussen 
de volgende output gaat hebben:

1
22
333
4444
*/
import * as readline from "node:readline/promises";
import { stdin as input,stdout as output } from "node:process";
const userInput = readline.createInterface({input,output});

let getal = parseInt(await userInput.question("Welk getal? "));

for (let i = 1 ; i <= getal ; i++){
    let inhoud = ''
    for (let j = 1 ; j <= i ; j++){
        inhoud += i.toString()
    }
    console.log(inhoud)
}

userInput.close()