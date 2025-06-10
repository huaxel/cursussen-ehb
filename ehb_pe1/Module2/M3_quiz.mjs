/*Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. 
Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. 
De vragen mag je zelf kiezen. Een voorbeeld van de input en output ziet er als volgt uit:
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let punten = 0;
console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: ');

let antwoord1 = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk? ');
if (antwoord1.toLowerCase() == 'parijs'){
    punten++
    console.log(`Jouw antwoord: ${antwoord1}\nGoed antwoord!`)
} else{
    console.log(`Jouw antwoord: ${antwoord1}\nFout antwoord. Het juiste antwoord is: Parijs`)
}

let antwoord2 = await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ');
if (antwoord2 == '9'){
    punten++
    console.log(`Jouw antwoord: ${antwoord2}\nGoed antwoord!`)
} else{
    console.log(`Jouw antwoord: ${antwoord2}\nFout antwoord. Het juiste antwoord is: 9`)
}

let antwoord3 = await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld? ');
if (antwoord3.toLowerCase() == 'blauwe vinvis'){
    punten++
    console.log(`Jouw antwoord: ${antwoord3}\nGoed antwoord!`)
} else{
    console.log(`Jouw antwoord: ${antwoord3}\nFout antwoord. Het juiste antwoord is: Blauwe vinvis`)
}

let antwoord4 = await userInput.question("Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'? ");
if (antwoord4.toLowerCase() == 'shakespeare'){
    punten++
    console.log(`Jouw antwoord: ${antwoord4}\nGoed antwoord!`)
} else{
    console.log(`Jouw antwoord: ${antwoord4}\nFout antwoord. Het juiste antwoord is: Shakespeare`)
}

let antwoord5 = await userInput.question('Vraag 5: Hoeveel poten heeft een spin? ');
if (antwoord5 == '8'){
    punten++
    console.log(`Jouw antwoord: ${antwoord5}\nGoed antwoord!`)
} else{
    console.log(`Jouw antwoord: ${antwoord5}\nFout antwoord. Het juiste antwoord is: 8`)
}

console.log(`Je hebt ${punten} van de 5 vragen juist beantwoord.`);
userInput.close();