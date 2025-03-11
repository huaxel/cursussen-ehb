import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question('Hoe hoog mag de diamant zijn? '));

// bovenste deel diamant
console.log('\n* Hier is jouw diamant *\n')

for (let laag = 1; laag <= hoogte; laag+=2){
    let inhoud = '        ';
    // spaties
    for(let spaties = 1 ; spaties <= (hoogte - laag)/2; spaties++){
        inhoud += ' ';
    }
    // sterren
    for (let ster = 1 ; ster <= laag ; ster++){
        inhoud += '*';
    }
    console.log(inhoud)
}

// onderste deel diamant
for (let laag = hoogte-2; laag >= 1; laag-=2){
    let inhoud = '        ';
    // spaties
    for (let spaties = 1 ; spaties <= (hoogte - laag)/2 ; spaties++){
        inhoud += ' ';
    }
    // sterren
    for (let ster = 1; ster <= laag ; ster++){
        inhoud += '*';
    }
    console.log(inhoud)
}

userInput.close()