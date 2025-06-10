import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });
let userResponse = await userInput.question("Geef me drie getallen? ");
let getal = userResponse.split(" ").map(num => parseInt(num));

if (getal[0] === 0 || getal[1] === 0 || getal[2] === 0) {
  process.exit();
} else {
  console.log(`De som is ${getal[0] + getal[1] + getal[2]}`);
}
