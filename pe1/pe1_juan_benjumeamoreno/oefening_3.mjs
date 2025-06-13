import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
// const userInput = readline.createInterface({ input, output });

// await userInput.question("Hoeveel willekeurige getallen wil je genereren? ");

function voegKostenToe(lijst, kost) {
  if (kost > 0) {
    lijst.push(kost);
  } else {
    console.log("De kost moet hoger zijn dan 0");
  }
  return lijst;
}

function maakLijstLeeg(lijst) {
  lijst.length = 0;
  return lijst;
}

function berekenTotaal(lijst) {
  let totaleKost = lijst.reduce((a, b) => a + b, 0);
  if (lijst.length > 0) {
    console.log(`De totale maandelijkse kosten zijn momenteel: ${totaleKost}`);
  } else {
    console.log("Momenteel is mijn lijst leeg");
  }
  return lijst;
}

// test uitvoer
let lijst = [];

lijst = voegKostenToe(lijst, 60.5);
lijst = voegKostenToe(lijst, -1);
/* Het resultaat hiervan moet op dit moment zijn:
De kost moet hoger zijn dan 0
*/
lijst = voegKostenToe(lijst, 250);
lijst = voegKostenToe(lijst, 15.99);

berekenTotaal(lijst);

/* Het resultaat hiervan moet op dit moment zijn:
De totale maandelijkse kosten zijn momenteel: 326.49
*/

lijst = maakLijstLeeg(lijst);

berekenTotaal(lijst);

/* Het resultaat hiervan moet op dit moment zijn:
Momenteel is mijn lijst leeg
*/

// voegKostenToe(lijst, 0);