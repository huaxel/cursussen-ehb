/*
    Maak een Student class met een constructor die naam en vakken parameters accepteert
    Voeg een methode voegPuntToe(vak, punt) toe die een punt toevoegt voor een bepaald vak
    Voeg een methode gemiddelde() toe die het gemiddelde punt van alle vakken berekent
    Voeg een methode toonRapport() toe die een string teruggeeft met alle vakken en punten
    Creëer twee student-objecten met verschillende namen en vakken
    Voeg enkele punten toe aan elke student
    Toon het rapport van elke student in de 'output' div
    */
class Student {
    constructor(naam, vakken) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {};
        vakken.forEach((vak) => {
            this.punten[vak] = [];
        });
    }

    voegPuntToe(vak, punt) {
        if (!this.punten.hasOwnProperty(vak)) {
            this.punten[vak] = [];
        }
        this.punten[vak].push(punt);
        return `Punt ${punt} toegevoegd voor vak ${vak}`;
    }

    gemiddelde() {
        let totaalPunten = 0;
        let aantalPunten = 0;

        for (const vak in this.punten) {
            const puntenLijst = this.punten[vak];
            puntenLijst.forEach((punt) => {
                totaalPunten += punt;
                aantalPunten++;
            });
        }
        return aantalPunten > 0 ? totaalPunten / aantalPunten : 0;
    }

    toonRapport() {
        let rapport = `<h2> Rapport voor ${this.naam}: </h2>`;
        rapport += `<ul>`;
        for (const vak in this.punten) {
            rapport += `<li>${vak}: ${this.punten[vak].join(
                ", "
            )}/20</li>`;
        }
        rapport += `</ul>`;
        rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(
            1
        )}</p>`;
        return rapport;
    }
}

const student1 = new Student("Jan", [
    "Wiskunde",
    "Nederlands",
    "Engels",
]);
const student2 = new Student("Piet", [
    "Wiskunde",
    "Biologie",
    "Geschiedenis",
]);

student1.voegPuntToe("Wiskunde", 18);
student1.voegPuntToe("Nederlands", 12);
student1.voegPuntToe("Engels", 11);

student2.voegPuntToe("Wiskunde", 16);
student2.voegPuntToe("Biologie", 9);
student2.voegPuntToe("Geschiedenis", 13);
// Probeer een punt toe te voegen voor een vak dat niet bestaat
console.log(student2.voegPuntToe("Fysica", 14)); // Dit zal een foutmelding geven

const outputDiv = document.getElementById("output");
outputDiv.innerHTML =
    student1.toonRapport() + "<hr>" + student2.toonRapport();