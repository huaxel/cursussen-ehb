let boek = {
    titel: 'Mijn Avontuurlijk Boek',
    auteur: {
        voornaam: 'Anne',
        achternaam: 'Smith'
    }
};


let rekenmachine = {
    voegToe: function(a, b) {
        return a + b;
    },
    vermenigvuldig: function(a, b) {
      return a * b;
    }
};

let som = rekenmachine.voegToe(2, 2);


boek.isbn = '123456987458';