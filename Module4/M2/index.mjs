/*
    Maak een Bankrekening class met eigenschappen voor rekeningnummer, eigenaar, en saldo
    Voeg getters toe voor alle eigenschappen en een setter voor saldo die voorkomt dat het saldo negatief wordt
    Maak methodes storten(bedrag) en opnemen(bedrag) die het saldo aanpassen en succes/mislukt berichten teruggeven
    Maak een getter overzicht die een string met rekeninginformatie teruggeeft
    Maak een Spaarrekening subclass met een extra rentepercentage eigenschap
    Voeg aan de Spaarrekening een renteToevoegen() methode toe die het saldo verhoogt op basis van het rentepercentage
    Maak een static methode rekeningNrGenerator() in de Bankrekening class die unieke rekeningnummers genereert
    Maak een static methode validerenTransactie(from, to, bedrag) die controleert of een transactie tussen rekeningen mogelijk is
    Maak enkele rekeningen aan en voer verschillende transacties uit (storten en opnemen)
    Toon het overzicht van alle rekeningen en de uitgevoerde transacties
*/

class Bankrekening {
    constructor(eigenaar, saldo = 0) {
        this._rekeningnummer = Bankrekening.rekeningNrGenerator();
        this._eigenaar = eigenaar;
        this._saldo = saldo;
        this.type = "Betaalrekening";
    }
    get rekeningnummer {
        return this._rekeningnummer;

    }
    get eigenaar{
        return this._eigenaar;

    }
    get saldo{
        return this._saldo;

    }
    set saldo(bedrag){
        bedrag >= 0 ? this._saldo = bedrag : console.log("Saldo kan niet negatief zijn.");
    }
    storten(bedrag){
        if (bedrag > 0) {
            this._saldo += bedrag;
            console.log(`€${bedrag} gestort. Nieuw saldo: €${this._saldo}`);
        } else {
            console.log("Bedrag moet positief zijn.");
        }
    }
    
    opnemen(bedrag){
        if (bedrag > 0 && this._saldo >= bedrag) {
            this._saldo -= bedrag;
            console.log(`€${bedrag} opgenomen. Nieuw saldo: €${this._saldo}`);
        } else {
            console.log("Onvoldoende saldo of ongeldig bedrag.");
        }
    }
    
    get overzicht(){
        return `${this.type} - Rekeningnummer: ${this._rekeningnummer}, Eigenaar: ${this._eigenaar}, Saldo: €${this._saldo}`;
    }

    static rekeningNrGenerator() {
        return ++Bankrekening.laatsteRekeningNr;
    }

    static validerenTransactie(from, to, bedrag) {
        if (from instanceof Bankrekening && to instanceof Bankrekening && bedrag > 0 && from.saldo >= bedrag) {
            console.log(`Transactie gevalideerd: €${bedrag} van ${from.rekeningnummer} naar ${to.rekeningnummer}`);
            return true;
        } else {
            console.log("Transactie mislukt: Onvoldoende saldo of ongeldige rekeningen/bedrag.");
            return false;
        }
    }
}
// Subclass Spaarrekening
class Spaarrekening extends Bankrekening {
    constructor(eigenaar, saldo = 0, rentepercentage = 0.01) {
        super(eigenaar, saldo);
        this.rentepercentage = rentepercentage;
        this.type = "Spaarrekening";
    }

    // Methode om rente toe te voegen
    renteToevoegen() {
        const rente = this._saldo * this.rentepercentage;
        this._saldo += rente;
        console.log(`Rente van €${rente.toFixed(2)} toegevoegd. Nieuw saldo: €${this._saldo.toFixed(2)}`);
    }

    // Overzicht aanpassen met rentepercentage
    get overzicht() {
        return `${this.type} - Rekeningnummer: ${this.rekeningnummer}, Eigenaar: ${this.eigenaar}, Saldo: €${this.saldo.toFixed(2)}, Rente: ${(this.rentepercentage * 100).toFixed(2)}%`;
    }
}

// Voorbeeld gebruik:

// Rekeningen aanmaken
const rekening1 = new Bankrekening("Alice", 500);
const rekening2 = new Bankrekening("Bob", 300);
const spaarrekening = new Spaarrekening("Charlie", 1000, 0.02);

output("<strong>--- Transacties ---</strong>");

// Transacties uitvoeren
rekening1.storten(200);
rekening2.opnemen(100);
spaarrekening.renteToevoegen();

// Transactie tussen rekeningen
if (Bankrekening.validerenTransactie(rekening1, rekening2, 250)) {
    rekening1.opnemen(250);
    rekening2.storten(250);
}

// Overzichten tonen
output("<br><strong>--- Overzichten ---</strong>");
output(rekening1.overzicht);
output(rekening2.overzicht);
output(spaarrekening.overzicht);