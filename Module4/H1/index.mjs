// Maak een Persoon basisclass met eigenschappen zoals naam, email, leeftijd
// Creëer Student en Docent subclasses die overerven van Persoon met specifieke extra eigenschappen en methodes
//     Student: studentnummer, studiejaar, etc.
//     Docent: vakgebied, aanstellingsdatum, etc.
// Maak een Cursus class met eigenschappen zoals titel, beschrijving, docent, ects, maximumStudenten
// Maak een Inschrijving class die een relatie legt tussen een student en een cursus
//     Inclusief datum van inschrijving, status (actief, voltooid, geannuleerd)
//     Methodes voor statuswijzigingen, beoordeling toevoegen, etc.
// Implementeer getters en setters voor eigenschappen met validatie:
//     Bijvoorbeeld: maximumStudenten mag niet negatief zijn, email moet een geldig formaat hebben
// Voeg statische methodes toe aan passende classes:
//     Student.zoekOpStudentnummer(nummer)
//     Cursus.zoekOpTitel(titel)
//     Inschrijving.controleerDubbele(student, cursus)
// Implementeer prototype methodes die voor alle instanties nuttig zijn
// Maak functies om de user interface te vullen met de gecreëerde data:
//     Toon alle cursussen in het cursusoverzicht
//     Toon studentdetails met hun inschrijvingen
//     Toon docenten met hun cursussen
//     Toon alle inschrijvingen met relevante details
// Implementeer functionaliteit om studenten in te schrijven voor cursussen, daarbij rekening houdend met het maximumaantal studenten
// Voeg validatie toe die voorkomt dat een student zich meerdere keren voor dezelfde cursus inschrijft
// Implementeer een functie die beoordelingen kan toevoegen aan inschrijvingen
class Persoon {
  constructor(naam, email, leeftijd) {
    this.naam = naam;
    this.email = email;
    this.leeftijd = leeftijd;
  }
  get naam() {
    return this._naam;
  }
  set naam(naam) {
    if (typeof naam === "string" && naam.trim() !== "") {
      this._naam = naam;
    } else {
      throw new Error("Ongeldige naam");
    }
  }
  get email() {
    return this._email;
  }
  set email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      this._email = email;
    } else {
      throw new Error("Ongeldig e-mailadres");
    }
  }
  get leeftijd() {
    return this._leeftijd;
  }
  set leeftijd(leeftijd) {
    if (typeof leeftijd === "number" && leeftijd > 0) {
      this._leeftijd = leeftijd;
    } else {
      throw new Error("Ongeldige leeftijd");
    }
  }
}
class Student extends Persoon {
  constructor(naam, email, leeftijd, studentnummer, studiejaar) {
    super(naam, email, leeftijd);
    this.studentnummer = studentnummer;
    this.studiejaar = studiejaar;
  }
  get studentnummer() {
    return this._studentnummer;
  }
  set studentnummer(studentnummer) {
    if (typeof studentnummer === "string" && studentnummer.trim() !== "") {
      this._studentnummer = studentnummer;
    } else {
      throw new Error("Ongeldig studentnummer");
    }
  }
  get studiejaar() {
    return this._studiejaar;
  }
  set studiejaar(studiejaar) {
    if (typeof studiejaar === "number" && studiejaar > 0) {
      this._studiejaar = studiejaar;
    } else {
      throw new Error("Ongeldig studiejaar");
    }
  }
  static zoekOpStudentnummer(studentnummer) {
    // Zoek logica hier
    return `Zoekresultaten voor ${studentnummer}`;
  }
  static zoekOpStudiejaar(studiejaar) {
    // Zoek logica hier
    return `Zoekresultaten voor ${studiejaar}`;
  }
}
class Docent extends Persoon {
  constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum) {
    super(naam, email, leeftijd);
    this.vakgebied = vakgebied;
    this.aanstellingsdatum = aanstellingsdatum;
  }
  get vakgebied() {
    return this._vakgebied;
  }
  set vakgebied(vakgebied) {
    if (typeof vakgebied === "string" && vakgebied.trim() !== "") {
      this._vakgebied = vakgebied;
    } else {
      throw new Error("Ongeldig vakgebied");
    }
  }
  get aanstellingsdatum() {
    return this._aanstellingsdatum;
  }
  set aanstellingsdatum(aanstellingsdatum) {
    if (aanstellingsdatum instanceof Date) {
      this._aanstellingsdatum = aanstellingsdatum;
    } else {
      throw new Error("Ongeldige aanstellingsdatum");
    }
  }
}
class Cursus {
  constructor(titel, beschrijving, docent, ects, maximumStudenten) {
    this.titel = titel;
    this.beschrijving = beschrijving;
    this.docent = docent;
    this.ects = ects;
    this.maximumStudenten = maximumStudenten;
  }
  get titel() {
    return this._titel;
  }
  set titel(titel) {
    if (typeof titel === "string" && titel.trim() !== "") {
      this._titel = titel;
    } else {
      throw new Error("Ongeldige titel");
    }
  }
  get beschrijving() {
    return this._beschrijving;
  }
  set beschrijving(beschrijving) {
    if (typeof beschrijving === "string" && beschrijving.trim() !== "") {
      this._beschrijving = beschrijving;
    } else {
      throw new Error("Ongeldige beschrijving");
    }
  }
  get docent() {
    return this._docent;
  }
  set docent(docent) {
    if (docent instanceof Docent) {
      this._docent = docent;
    } else {
      throw new Error("Ongeldige docent");
    }
  }
  get ects() {
    return this._ects;
  }
  set ects(ects) {
    if (typeof ects === "number" && ects > 0) {
      this._ects = ects;
    } else {
      throw new Error("Ongeldig aantal ECTS");
    }
  }
  get maximumStudenten() {
    return this._maximumStudenten;
  }
  set maximumStudenten(maximumStudenten) {
    if (typeof maximumStudenten === "number" && maximumStudenten >= 0) {
      this._maximumStudenten = maximumStudenten;
    } else {
      throw new Error("Ongeldig maximum aantal studenten");
    }
  }
  static zoekOpTitel(titel) {
    const cursussen = []; 
    return cursussen.filter(cursus => 
        cursus.titel.toLowerCase().includes(titel.toLowerCase())
    );
  }
}
class Inschrijving {
    constructor(student, cursus, datum, status) {
        this.student = student;
        this.cursus = cursus;
        this.datum = datum;
        this.status = status;
    }
    get student() {
        return this._student;
    }
    set student(student) {
        if (student instanceof Student) {
            this._student = student;
        } else {
            throw new Error("Ongeldige student");
        }
    }
    get cursus() {
        return this._cursus;
    }
    set cursus(cursus) {
        if (cursus instanceof Cursus) {
            this._cursus = cursus;
        } else {
            throw new Error("Ongeldige cursus");
        }
    }
    get datum() {
        return this._datum;
    }
    set datum(datum) {
        if (datum instanceof Date) {
            this._datum = datum;
        } else {
            throw new Error("Ongeldige datum");
        }
    }
    get status() {
        return this._status;
    }
    set status(status) {
        const geldigeStatussen = ["actief", "voltooid", "geannuleerd"];
        if (geldigeStatussen.includes(status)) {
            this._status = status;
        } else {
            throw new Error("Ongeldige status");
        }
    }
    static controleerDubbele(student, cursus) {
        // Controleer op dubbele inschrijving
        return false; // Placeholder
    }
    beoordelingToevoegen(beoordeling) {
        // Voeg beoordeling toe
        this.beoordeling = beoordeling;
    }
    wijzigStatus(nieuweStatus) {
        this.status = nieuweStatus;
    }
}

