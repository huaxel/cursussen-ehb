// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten

let password = '';

while(password != 'pe1iscool'){
    password = await userInput.question('Geef het wachtwoord in:');
}

console.log('Welkom gebruiker');

process.exit();