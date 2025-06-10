/*
Maak een Huisdier, huisdieren hebben een gewicht, leeftijd en naam.
Zorg voor een constructor, getters, setters en een toString functie.
Maak vervolgens een klasse hond die hier van gaat overerven.
Honden nemen alles over van een Huisdier en voegen nog een stamboeknummer toe.
Voorzie ook hiervoor een constructor, getters, setters en een toString functie.
Maak om alles te testen enkele huisdieren en honden aan en kijk wat er gebeurt als je hun gegevens afdrukt.
 */

package M1;
public class Huisdier {
    private String naam;
    private double gewicht;
    private int leeftijd;

    public Huisdier(String naam, double gewicht, int leeftijd) {
        this.naam = naam;
        this.gewicht = gewicht;
        this.leeftijd = leeftijd;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public double getGewicht() {
        return gewicht;
    }

    public void setGewicht(double gewicht) {
        this.gewicht = gewicht;
    }

    public int getLeeftijd() {
        return leeftijd;
    }

    public void setLeeftijd(int leeftijd) {
        this.leeftijd = leeftijd;
    }

    @Override
    public String toString() {
        return "Huisdier{" +
                "naam='" + naam + '\'' +
                ", gewicht=" + gewicht +
                ", leeftijd=" + leeftijd +
                '}';
    }
}
