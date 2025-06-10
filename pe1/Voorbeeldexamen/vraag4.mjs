import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal in: '));

if(getal <= 0){
    console.log('Je moet een positief getal ingeven');
}else{
    if(getal % 2 == 1){
        if(getal % 3 == 0){
            console.log('Hoera, dit is een lucky getal');
        }else{
            console.log('Hmm, dit getal is maar half lucky');
        }
    }else{
        console.log('Helaas, pindakaas!');
    }
}

process.exit();