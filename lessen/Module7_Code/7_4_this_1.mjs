let persoon = {
    naam: 'Jos',
    begroet: function() {
        console.log(`Hallo, ik ben ${this.naam}.`);
    }
};

persoon.begroet();