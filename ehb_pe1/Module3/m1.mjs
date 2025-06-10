/*
Maak een applicatie 
dat getallen aan de gebruiker 
vraagt en deze optelt bij elkaar 
zolang het ingegeven getal 
groter is dan 0. 
Van zodra de gebruiker een 
getal kleiner of gelijk 
aan 0 ingeeft print de applicatie 
de som af.*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question('Geef een getal: '));
let som = 0;

while (getal > 0) {
    som += getal;
    getal = parseInt(await userInput.question('Geef een getal: '));
}

console.log(`De som is ${som}`);
userInput.close();