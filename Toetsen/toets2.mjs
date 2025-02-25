import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let weekdag = await userInput.question("Welke dag van de week is vandaag? ");
let maand = await userInput.question("Welke maand zijn we vandaag? ");
let dag = await userInput.question("De hoeveelste dag van de maand is het? ");

console.log(`Het is vandaag ${weekdag} ${dag} ${maand}.`);

userInput.close(); // Sluit de interface