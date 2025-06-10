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
const userInput = readline.createInterface({ input, output });

const berekenTotaal = (categorie, prijs) => {
  let btw;
  switch (categorie) {
    case "krant":
      btw = 0;
      break;
    case "voeding":
    case "medicijnen":
      btw = 6;
      break;
    case "restaurant":
      btw = 12;
      break;
    default:
      btw = 21;
  }
  return prijs * (1 + btw / 100);
};

const categories = ["krant", "voeding", "medicijnen", "restaurant"];

const showCategories = () => {
  for (let categorie of categories) {
    console.log(categorie);
  }
  console.log("overig");
};

const main = async () => {
  console.log("Kies een type artikel:");

  showCategories();

  let typeArtikel = await userInput.question("Wat is het type artikel? ");

  while (!categories.includes(typeArtikel) && typeArtikel !== "overig") {
    console.log("Ongeldige invoer, kies een van de opgelijste types:");

    showCategories();
    typeArtikel = await userInput.question("Wat is het type artikel? ");
  }

  const prijs = parseFloat(
    await userInput.question("Wat is de prijs exclusief btw? ")
  );

  if (isNaN(prijs) || prijs < 0) {
    console.log("Ongeldige prijs ingevoerd.");
    process.exit(1);
  }

  const totaal = berekenTotaal(typeArtikel, prijs);
  console.log(`De totale prijs is ${totaal.toFixed(2)} euro`);

  userInput.close();
};

await main();

process.exit();
