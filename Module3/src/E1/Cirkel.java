package E1;

/*
Maak een klasse Cirkel die als gegevens de straal van de cirkel en de kleur bevat.
Zorg voor een aantal constructoren zodat je een Cirkel kan aanmaken:
- zonder parameters,
- met slechts één argument (straal, kleur)
- of met beide parameters (straal en kleur).

Tenzij anders ingegeven is de straal 0 en de kleur wit.

Maak (uiteraard) ook getters en setters. Zorg tenslotte voor de volgende extra methoden:

    print() om de cirkel (straal en kleur) af te printen.
    geefOmtrek() : 2 * pi * r , met r als straal
    geefOppervlakte() : pi * r * r

Voor de waarde van pi kan je Math.PI gebruiken.
 */

public class Cirkel {
    private double straal;
    private String kleur;
    private static final String DEFAULT_KLEUR = "wit";

    public Cirkel() {
        this.straal = 0;
        this.kleur = DEFAULT_KLEUR;
    }

    public Cirkel(String kleur) {
        this.straal = 0;
        this.kleur = kleur;
    }

    public Cirkel(double straal) {
        this.setStraal(straal);
        this.kleur = DEFAULT_KLEUR;
    }

    public Cirkel(String kleur, double straal) {
        this.setStraal(straal);
        this.kleur = kleur;
    }

    public void setStraal(double straal) {
        if (straal < 0) {
            throw new IllegalArgumentException("Straal kan niet negatief zijn.");
        }
        this.straal = straal;
    }

    public void setKleur(String kleur) {
        this.kleur = kleur;
    }

    public double getStraal() {
        return this.straal;
    }

    public String getKleur() {
        return this.kleur;
    }

    public double geefOmtrek() {
        return (float) (2 * Math.PI * this.straal);
    }

    public double  geefOppervlakte() {
        return (double) (Math.PI * this.straal * this.straal);
    }

    public void print() {
        System.out.println("De kleur is " + this.kleur + " en de straal is " + this.straal);
    }
}