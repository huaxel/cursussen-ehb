import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let werknemer = {
  naam: null,
  opleiding: null,
  leeftijd: null,
  vaardigheden: [],
};

werknemer.naam = await userInput.question("Voer de naam van de werknemer in: ");

werknemer.opleiding = await userInput.question(
  "Voer de opleiding van de werknemer in: "
);

werknemer.leeftijd = parseInt(
  await userInput.question("Voer de leeftijd van de werknemer in: ")
);

let vaardigheid;

while (vaardigheid != "STOP") {
  vaardigheid = await userInput.question(
    `Voer de vaardigheden van de werknemer in (typ 'STOP' om te stoppen): `
  );
  if (vaardigheid != "STOP") {
    werknemer.vaardigheden.push(vaardigheid);
  } else break;
}

function displayWerknemer(werknemer) {
  console.log("\nInformatie over de werknemer: ")
  console.log(`Naam: ${werknemer.naam}`);
  console.log(`Opleiding: ${werknemer.opleiding}`);
  console.log(`Leeftijd: ${werknemer.leeftijd}`);
  console.log(`Vaardigheden: ${werknemer.vaardigheden.join(", ")}`); 
}

displayWerknemer(werknemer);
userInput.close();
