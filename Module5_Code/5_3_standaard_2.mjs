function addVat(price, vat = 21){
    return(price * (1 + vat/100));
}

console.log(addVat(12.52));
console.log(addVat(85.21));
console.log(addVat(34.20));
console.log(addVat(96.96));
console.log(addVat(1.02));
console.log(addVat(8.11, 8));
console.log(addVat(17.01, 11));
