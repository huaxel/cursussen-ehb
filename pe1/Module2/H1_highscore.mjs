// Schrijf een script dat 5 getallen inleest.
// Toon na het inlezen wat het hoogste getal, het laagste getal en het gemiddelde is.
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getallen = (await userInput.question("Geef me vijf getallen: "))
    .split(" ")
    .map(Number);

const maxgetal = Math.max(...getallen);
const mingetal = Math.min(...getallen);
function calculateAverage(numbers) {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
const avg = calculateAverage(getallen);

console.log(`Hoogste getal: ${maxgetal}`);
console.log(`Laagste getal: ${mingetal}`);
console.log(`Gemiddelde: ${avg}`);

userInput.close();
