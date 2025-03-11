/*
Maak een variabele getal aan, 
gebruik een lus om de tafels 
van vermenigvuldiging van 
dat getal te laten zien. 
De output zal er ongeveer als volgt uit zien:

De tafel van 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseInt(await userInput.question('Geef een getal: '));

console.log(`De tafel van ${getal}`);

for (let i = 1; i < 11 ; i++) {
    console.log(`${getal} x ${i} = ${getal*i}`)
}

userInput.close()