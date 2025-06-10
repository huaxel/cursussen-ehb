let hoogte = 4;

for (let i = 1; i < hoogte + 1 ; i++) {
    let row = '*';
    for (let j = 1; j < i; j++) {
        row +='*';
    }
    console.log(row);
}