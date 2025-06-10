/*
E1: Herhaling klasse
Maak een klasse Persoon, van een persoon willen we de volgende gegevens opslaan:

    Voornaam
    Achternaam
    email
    adres (Object van klasse Adres, dat mag je uit de oefeningen van Classes overnemen)

Zorg voor een constructor waar je een persoon kan aanmaken met een voor- en achternaam.
Overschrijf ook nog de toString methode om de gegevens te kunnen afdrukken.
Om te testen of alles werkt, maak je in je main klasse twee personen aan en geef je hen een adres.
Druk hun gegevens af om te controleren of correct is ingegeven.
Als uitdaging zoek je nog een manier toe om te tellen hoeveel personen er in totaal zijn aangemaakt. Hiervoor kan je gebruik maken van static
 */
package E1;
import M1.Adres;

public class Persoon {
    private String voornaam;
    private String achternaam;
    private String email;
    private Adres adres;

    private static int aantalPersonen = 0;

    public Persoon(String voornaam, String achternaam) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        aantalPersonen++;
    }

    public Persoon(String voornaam, String achternaam, String email, Adres adres) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.adres = adres;
        aantalPersonen++;
    }

    public static int getAantalPersonen() {
        return aantalPersonen;
    }

    @Override
    public String toString() {
        return "Persoon{" +
                "voornaam='" + voornaam + '\'' +
                ", achternaam='" + achternaam + '\'' +
                ", email='" + email + '\'' +
                ", adres=" + adres +
                '}';
    }
}
