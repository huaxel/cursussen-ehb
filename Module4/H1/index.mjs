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
