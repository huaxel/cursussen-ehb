/*Kader:
Je werkt voor een gemeente die geïnteresseerd is in het monitoren van het totaalverbruik van straten en woningen binnen de stad. Om dit te vergemakkelijken, moet je een applicatie ontwikkelen die dit verbruik kan bijhouden en weergeven.

Deel 1:
Eigendom Hiërarchie
Maak een klasse Eigendom. Een Eigendom heeft een huisnummer (String) en een verbruik (integer). Het mag niet mogelijk zijn een rechtstreekse instantie aan te maken van het type Eigendom, maar wel 1 van zijn subklassen. Zorg dat je bij aanmaken van een Eigendom altijd het huisnummer en het verbruik moet meegeven.
Voorzie volgende overervende klassen met bijkomende eigenschappen en gedrag:
Woning
bevat een type dat enkel één van de volgende waarden mag aannemen (SOCIAAL, RIJHUIS, ALLEENSTAAND). Gebruik hiervoor een enumeratie.
Appartement
bevat een busnummer (integer)
Winkel
bevat een naam (tekst)
Maak een interface Ownable die de methode giveOwner verplicht en zorg ervoor dat Winkel deze interface implementeert (Je mag de methode leeg laten).
Test je code door in je main functie een woning en twee appartementen aan te maken.

Deel 2:
Collections
Maak een klasse Appartementsgebouw die Ownable implementeert  (je mag de methode leeg laten). Deze moet een collection bevatten van Appartementen. Zorg ervoor dat deze collection automatisch gesorteerd wordt op basis van busnummer, wat ook de standaard (natuurlijke) manier van ordenen moet zijn.
Voorzie binnen de klasse een methode geefTotaalVerbruik die het totale verbruik van het Appartementsgebouw (alle Appartementen samen) weergeeft.
Test je code door de twee appartementen uit deel 1 toe te voegen aan het appartementsgebouw. Eens je deze hebt toegevoegd print je het totale verbruik af.

Deel 3:
Voorzie een klasse Straat. Een straat heeft een postcode, een naam en een lijst van Eigendommen. Deze lijst mag duplicate elementen bevatten.
Zorg ervoor dat twee Straten gelijk zijn wanneer hun postcode en naam dezelfde is.
Geef Straat de volgende twee methoden:

geefVerbruikHuisnummer: Deze methode krijgt een huisnummer mee en stuurt het verbruik van de bijhorende Eigendom terug. Indien de straat het huisnummer niet bevat gooit deze methode een EigendomNietAanwezigException.
BewaarStraat: Deze methode schrijft het volledige Straat-object weg naar de schijf.
Test dit laatste deel door een straat te maken met een huis en een appartement. Eens je de straat hebt aangemaakt gebruik je de bewaarStraat methode om alles op te slaan in een bestand.*/

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}