let hoogte = 4;

for (let layer = 1 ; layer <= hoogte; layer++) {
  let rij = "";

  for (let getal = 1; getal <= layer; getal++) {
    rij += `${getal} `;
  }

  console.log(rij);
}
