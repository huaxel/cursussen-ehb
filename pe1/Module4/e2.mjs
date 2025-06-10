/*
Schrijf een script met de volgende variabelen:

    start: Met welk getal beginnen we?
    end: Met welk getal eindigen we?
    deler1: Wat is het eerste getal waarop we testen?
    deler2: Wat is het tweede getal waarop we testen?

Zorg ervoor dat het script het volgende gaat uitprinten: 
alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.
*/
import * as readline from "node:readline/promises";
import { stdin as input,stdout as output } from "node:process";
const userInput = readline.createInterface({input,output});

let start = parseInt(await userInput.question("Met welk getal beginnen we? "));
let end = parseInt(await userInput.question("Met welk getal eindigen we? "));
let deler1 = parseInt(await userInput.question("Wat is het eerste getal waarop we testen? "));
let deler2 = parseInt(await userInput.question("Wat is het tweede getal waarop we testen? "));

function deelbaar(start,end,deler1,deler2){

    for (let i = start ; i <= end ; i++){
        if(i % deler1 == 0 && i % deler2 == 0){
            console.log(i)
        }
    }
};

deelbaar(start,end,deler1,deler2);
userInput.close();