let persoon1 = {
    naam: 'Jos',
    begroet: function() {
        console.log(`Hallo, ik ben ${this.naam}.`);
    }
};

let persoon2 = {
    naam: 'Jef',
    begroet: function() {
        console.log(`Hallo, ik ben ${this.naam}.`);
    }
};
            
persoon1.begroet();
persoon2.begroet();