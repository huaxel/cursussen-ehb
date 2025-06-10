// Oefening 4: Functies/Beslissingen (20 punten)
// Schrijf een script dat twee dingen aan de gebruiker vraagt:
//     Wat voor type artikel.
//     De volgende types zijn geldig:
//         krant: 0% BTW
//         voeding: 6% BTW
//         medicijnen: 6% BTW
//         restaurant: 12% BTW
//         Alle overige types: 21% BTW
//     Prijs exclusief BTW
// Zorg ervoor dat de prijs inclusief btw in de variabele totaal komt de staan na uitvoer van je script.
// Zorg ervoor dat je script minstens een switch/case structuur en een functie bevat.
// Je mag gebruik maken van onderstaande code:
// Als je bvb 12% BTW bij een bedrag wilt toevoegen kan dit door het bedrag te vermenigvuldigen met 1.12.

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

let totaal;

const categories = ['krant', 'voeding', 'medicijnen', 'restaurant', 'overig'];

const types = {
  'krant': 0,
  'voeding': 0.06,
  'medicijnen': 0.06,
  'restaurant': 0.12,
  'overig': 0.21,
};

console.log("Kies een type artikel:");

for (let categorie of categories){
    console.log(categorie)
}

const userInput = readline.createInterface({ input, output });
let typeArtikel = await userInput.question("Wat is het type artikel? ");

if (!categories.includes(typeArtikel)){
    console.log("Kies een van de opgelijste types")
} else {
    let prijs = parseFloat(await userInput.question("Wat is de prijs? "));
    totaal = prijs * (1+types[typeArtikel])
}

console.log(`De totale prijs is ${totaal}`)

process.exit();
