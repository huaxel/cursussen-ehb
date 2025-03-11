/*
Maak een script waar je een zijde1 en zijde2 
kan ingeven. Geef de oppervlakte van een 
rechthoek met de afmetingen zijde1 en zijde2.
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });
let inputString = await userInput.question('Geef me de lengte van de twee zijden: ');

let zijden = inputString.split(' ').map(Number);
let zijde1 = zijden[0]
let zijde2 = zijden[1]

function berekenOppervlakte (zijde1,zijde2){
    let oppervlakte = zijde1 * zijde2
    return oppervlakte
}

let oppervlakte = berekenOppervlakte(zijde1,zijde2)

console.log(`De oppervlakte is ${oppervlakte}`)

userInput.close()