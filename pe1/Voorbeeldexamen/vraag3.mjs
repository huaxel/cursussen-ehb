let getal = -1;
let som = 1;

do{
    getal += 2;
    som *= getal;
}while(getal >= 0 && getal < 5)

console.log(`De som is ${som}`);
process.exit();