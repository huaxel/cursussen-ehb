package M1;

/*
M1: Een iets minder eenvoudige klasse"

Maak een klasse Adres. Een object van de klasse kan de adresgegevens van een persoon bijhouden.
Een adres bevat minstens de volgende gegevens:

    straatnaam
    huisnummer (enkel cijfers)
    bus
    postcode (exact 4 cijfers)
    woonplaats

Denk zelf na over de meest geschikte types om bv. tekst of getallen bij te houden.
Zorg er voor dat je zeker een constructor hebt waar je alles aan kan meegeven.
Zorg ook voor getters en setters.
Voeg ook nog een functie toe waarmee je alle gegevens in de console kan afdrukken.
Als uitdaging voorzie je ook nog een controle bij het invoeren van een postcode,
dit moet uit exact 4 cijfers bestaan en anders vervang je de invoer door 9999.

 */

public class Adres {

    private String straatnaam;
    private int huisnummer;
    private String bus;
    private int postcode;
    private static final int DEFAULT_POSTCODE = 9999;
    private String woonplaats;

    public Adres(String straatnaam, int huisnummer, String bus, int postcode, String woonplaats) {
        this.straatnaam = straatnaam;
        this.setHuisnummer(huisnummer);
        this.setPostcode(postcode);
        this.bus = bus;
        this.woonplaats = woonplaats;
    }

    public void setStraatnaam(String straatnaam) {
        this.straatnaam = straatnaam;
    }

    public String getStraatnaam() {
        return this.straatnaam;
    }

    public void setHuisnummer(int huisnummer) {
        if (huisnummer < 0) {
            throw new IllegalArgumentException("Huisnummer kan niet negatief zijn.");
        } else {
            this.huisnummer = huisnummer;
        }
    }

    public int getHuisnummer() {
        return this.huisnummer;
    }

    public void setBus(String bus) {
        this.bus = bus;
    }

    public String getBus() {
        return this.bus;
    }

    public void setPostcode(int postcode) {
        if (postcode < 0 || String.valueOf(postcode).length() != 4) {
            this.postcode = DEFAULT_POSTCODE;
        } else {
            this.postcode = postcode;
        }
    }

    public int getPostcode() {
        return this.postcode;
    }

    public void setWoonplaats(String woonplaats) {
        this.woonplaats = woonplaats;
    }

    public String getWoonplaats() {
        return this.woonplaats;
    }

    public void print() {
        String formatAdres = String.format("Jouw adres is %s %d bus %s, %d %s", this.straatnaam, this.huisnummer, this.bus, this.postcode, this.woonplaats);

        System.out.println(formatAdres);
    }

    @Override
    public String toString() {
        return "Adres{" +
                "straatnaam='" + straatnaam + '\'' +
                ", huisnummer=" + huisnummer +
                ", bus='" + bus + '\'' +
                ", postcode=" + postcode +
                ", woonplaats='" + woonplaats + '\'' +
                '}';
    }
}
