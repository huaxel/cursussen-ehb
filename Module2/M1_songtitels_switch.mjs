/* 
Maak een keuzemenu met de keuze tussen 4 verschillende artiesten. 
Lees daarna de keuze in van de gebruiker en toon een songtitel van deze artist. 
Een voorbeeld hiervan:
Kies een artiest:
1. Red Hot Chili Peppers
2. AC/DC
3. Netsky
4. De Strangers
Geef je keuze in: 4
Je koos voor "De Strangers"
Ze zijn de artist achter de hit: Mijnen blauwe geschelpte
Maak zowel een versie dat gebruik maakt van if/else en een versie dat gebruik maakt van een switch/case.
*/
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let keuze = await userInput.question('Kies een artiest:\n1. Red Hot Chili Peppers\n2. AC/DC\n3. The Rolling Stones\n4. De Strangers\n');
let hit = 'a';
let artiest = 't';

switch (keuze){
    case '1':
        artiest = 'Red Hot Chili Peppers';
        hit = 'Californication';
        break;
    case '2':
        artiest = 'AC/DC';
        hit = 'Thunderstruck';
        break;
    case '3':
        artiest = 'The Rolling Stones';
        hit = 'Satisfaction'
        break;
    case '4':
        artiest = 'De Strangers';
        hit = 'Mijnen blauwe geschelpte'
        break; 
    default:
        console.log('Geef een valabele keuze')
} 

console.log(`Je koos voor "${artiest}"\nZe zijn de artist achter de hit: ${hit}`);
userInput.close();