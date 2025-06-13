import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getal = parseFloat(
  await userInput.question("Hoeveel willekeurige getallen wil je genereren? ")
);

if (getal < 0) {
  console.log("Gelieve géén negatief getal in te voeren.");
  process.exit();
}

if (getal == 0) {
  console.log("Ok dan genereren we er géén") 
  process.exit();
}

let getallen = [];

for (let i = 0; i < getal; i++) {
  let randomGetal = random(1, 10);
  getallen.push(randomGetal);
}

let oneven = getallen.filter((getal) => getal % 2 == 1).length;

getal > 1
  ? console.log(
      `De gegenereerde willekeurige getallen zijn: ${getallen.join(", ")}`
    )
  : console.log(`Het gegenereerde willekeurige getal is: ${getallen}`);
 
if (getal > 1) {
  console.log(
    `Van de gegenereerde getallen ${oneven > 1 ? "zijn" : "is"} er ${
      oneven > 0 ? oneven : "géén"
    } oneven.`
  );
} else console.log(`Er is ${oneven > 0 ? "één" : "géén"} oneven getal`);

userInput.close();
