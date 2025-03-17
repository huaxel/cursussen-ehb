/*
    Maak een basis Voertuig class met eigenschappen: merk, model, jaar, verhuurPrijs en beschikbaar (Boolean)
    Maak een methode verhuur() die de beschikbaarheid op false zet en een bericht teruggeeft
    Maak een methode retourneer() die de beschikbaarheid op true zet en een bericht teruggeeft
    Maak een Auto subclass die extra eigenschappen heeft zoals aantalDeuren en brandstofType
    Maak een Motor subclass met extra eigenschappen zoals cilinderinhoud en type (sport, tour, etc.)
    Overschrijf de verhuur methode in beide subclasses om extra specifieke informatie in het bericht op te nemen
    Maak meerdere instanties van zowel auto's als motoren
    Toon een overzicht van alle voertuigen in een HTML tabel met details en verhuurstatus
    Voeg functionaliteit toe om voertuigen te verhuren en retourneren, en toon de berichten hiervan
*/

class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
        this.id = Voertuig.generateId();
    }

    verhuur() {
        if (!this.beschikbaar) {
            return `Dit ${this.merk} ${this.model} is al verhuurd.`;
        }
        this.beschikbaar = false;
        return `Dit ${this.merk} ${this.model} is verhuurd voor ${this.verhuurPrijs} euro per dag.`;
    }

    retourneer() {
        if (this.beschikbaar) {
            return `Dit ${this.merk} ${this.model} is al beschikbaar.`;
        }
        this.beschikbaar = true;
        return `Dit ${this.merk} ${this.model} is geretourneerd en is nu beschikbaar.`;
    }

    static idCounter = 1;
    static generateId() {
        return Voertuig.idCounter++;
    }
}

class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstoftype) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstoftype = brandstoftype;
        this.type = "auto";
    }

    verhuur() {
        return (
            super.verhuur() +
            ` Dit is een auto met ${this.aantalDeuren} deuren en werkt op ${this.brandstoftype}.`
        );
    }
}

class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, motorType) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud;
        this.motorType = motorType;
        this.type = "motor";
    }
    verhuur() {
        return (
            super.verhuur() +
            ` Dit is een ${this.motorType} motor met een cilinderinhoud van ${this.cilinderinhoud}cc.`
        );
    }
}

const vloot = [
    new Auto("Toyota", "Corolla", 2020, 50, 4, "benzine"),
    new Auto("Ford", "Focus", 2019, 45, 5, "diesel"),
    new Motor("Yamaha", "MT-07", 2021, 70, 689, "sport"),
    new Motor("Harley-Davidson", "Street 750", 2018, 80, 749, "tour"),
];

function renderVloot() {
    let html = "<h2> Beschikbare Voertuigen </h2>";
    html += "<table>";

    html +=
        "<tr><th>Type</th><th>Merk</th><th>Model</th><th>Jaar</th><th>Prijs</th><th>Beschikbaar</th><th>Acties</th></tr>";
    vloot.forEach((voertuig) => {
        html += `<tr>
            <td>${voertuig.type}</td>
            <td>${voertuig.merk}</td>
            <td>${voertuig.model}</td>
            <td>${voertuig.jaar}</td>
            <td>${voertuig.verhuurPrijs} euro</td>
            <td class="${voertuig.beschikbaar ? "beschikbaar" : "niet-beschikbaar"}">${voertuig.beschikbaar ? "Ja" : "Nee"}
            </td>
            <td>
                <button onclick="verhuurVoertuig(${
                    voertuig.id
                })">Verhuur</button>
                <button onclick="retourneerVoertuig(${
                    voertuig.id
                })">Retourneer</button>
            </td>
        </tr>`;
    });

    html += "</table>";
    html += '<div id="messages"></div>';
    document.getElementById("output").innerHTML = html;
}

function verhuurVoertuig(id) {
    const voertuig = vloot.find((v) => v.id === id);
    if (!voertuig) return toonBericht("Voertuig niet gevonden!");
    const bericht = voertuig.verhuur();
    toonBericht(bericht);
    renderVloot();
}

function retourneerVoertuig(id) {
    const voertuig = vloot.find((v) => v.id === id);
    if (!voertuig) return toonBericht("Voertuig niet gevonden!");
    const bericht = voertuig.retourneer();
    toonBericht(bericht);
    renderVloot();
}

function toonBericht(bericht) {
    const messagesDiv = document.getElementById("messages");

    if (messagesDiv) {
        messagesDiv.innerHTML = bericht;
        setTimeout(() => {
            messagesDiv.innerHTML = "";
        }, 3000);
    }
}
renderVloot(); 