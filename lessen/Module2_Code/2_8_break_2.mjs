import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fruit = await userInput.question('Welk type fruit?');

let prijs = 0;

switch(fruit){
    case 'peren':
    case 'peer':
        prijs = 1.02;
        break;
    case 'appelen':
    case 'appel':
        prijs = .98;
        break;
    case 'bananen':
    case 'banaan':
        prijs = 1.12;
        break;
    default:
        console.log('Type fruit niet gekend');
    }
    
    console.log('De prijs van een '+ fruit +' is '+ prijs +'€');
    
process.exit();
