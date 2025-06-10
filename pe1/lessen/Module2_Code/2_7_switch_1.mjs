import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let fruit = await userInput.question('Welk type fruit? ');

let prijs = 0;
if(fruit == 'peer'){
    prijs = 1.02;
}else if(fruit == 'appel'){
    prijs = .98;
}else if(fruit == 'banaan'){
    prijs = 1.12;
}else if(fruit == 'mango'){
    prijs = 1.52;
}else if(fruit == 'meloen'){
    prijs = 2.28;
}else{
    console.log('Type fruit niet gekend');
}

console.log('De prijs van een '+ fruit +' is '+ prijs +'€');

process.exit();