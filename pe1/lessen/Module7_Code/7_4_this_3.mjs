function begroet() {
    console.log(`Hallo, ik ben ${this.naam}.`);
}

let persoon1 = { naam: 'Jos' };
let persoon2 = { naam: 'Jef' };

persoon1.begroet = begroet;
persoon2.begroet = begroet;

persoon1.begroet(); // Uitvoer: "Hallo, ik ben Jos."
persoon2.begroet(); // Uitvoer: "Hallo, ik ben Jef."