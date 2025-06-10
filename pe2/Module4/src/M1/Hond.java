package M1;

public class Hond extends Huisdier {
    private int stamboekNummer;
    public Hond(String naam, double gewicht, int leeftijd, int stamboekNummer) {
        super(naam, gewicht, leeftijd);
        this.stamboekNummer = stamboekNummer;
    }

    public int getStamboekNummer() {
        return stamboekNummer;
    }

    public void setStamboekNummer(int stamboekNummer) {
        this.stamboekNummer = stamboekNummer;
    }

    @Override
    public String toString() {
        return "Hond{" +
                "stamboekNummer=" + stamboekNummer +
                "} " + super.toString();
    }
}
