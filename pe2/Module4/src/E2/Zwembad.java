/*
E2: Niet verzuipen

We maken een klasse Zwembad om een offerte te kunnen opstellen voor de bouw van zwembaden.
Een zwembad zal bestaan uit een cirkelvormig reservoir water, een pad er rond en een omheining rond het pad.
Je kan het jezelf gemakkelijker maken door gebruik te maken van de klasse Cirkel uit de oefeningen voor Classes, dit helpt voor de berekeningen.
Om dit voor te stellen hebben we enkele gegevens nodig:

    de straal van het zwembad zelf
    de breedte van het pad
    de prijs voor het pad, we gaan er van uit dat dit een prijs per vierkante meter is, bv. 45 €/m²
    de prijs voor de omheining, we gaan er van uit dat dit een prijs is per meter, bv. 80.75 €/m

Binnen deze klasse schrijf je functies uit om het volgende te berekenen:

    De prijs van het pad
    De prijs van de omheining
    De totale prijs hiervoor

 */
package E2;
import E1.Cirkel;

public class Zwembad {
    private double straal;
    private double breedtePad;
    private double oppervlaktePad;
    private double omtrekPad;
    private double eenheidsPrijsPad;
    private double eenheidsPrijsOmheining;
    private Cirkel cirkel;
    private double prijsOmheining;
    private double prijsPad;
    private double totalePrijs;

    public Zwembad(double straal, double breedtePad, double eenheidsPrijsPad, double eenheidsPrijsOmheining) {
        this.straal = straal;
        this.breedtePad = breedtePad;
        this.eenheidsPrijsPad = eenheidsPrijsPad;
        this.eenheidsPrijsOmheining = (double) eenheidsPrijsOmheining;
        this.cirkel = new Cirkel(straal);
        this.oppervlaktePad = new Cirkel(this.straal+this.breedtePad).geefOppervlakte() - this.cirkel.geefOppervlakte();
        this.omtrekPad = new Cirkel(this.straal+this.breedtePad).geefOmtrek();
    }

    public double berekenPrijsPad(){
        this.prijsPad = this.eenheidsPrijsPad * this.oppervlaktePad;
        System.out.println("Oppervlakte pad: " + this.oppervlaktePad);
        System.out.println("Eenheidsprijs pad: " + this.eenheidsPrijsPad);
        System.out.println("Prijs pad: " + this.prijsPad);
        return prijsPad;
    }

    public double berekenPrijsOmheining(){
        this.prijsOmheining = this.eenheidsPrijsOmheining * this.omtrekPad;
        System.out.println("Omtrek pad: " + this.omtrekPad);
        System.out.println("Eenheidsprijs omheining: " + this.eenheidsPrijsOmheining);
        System.out.println("Prijs omheining: " + this.prijsOmheining);
        return prijsOmheining;
    }

    public double berekenTotalePrijs(){
        this.berekenPrijsPad();
        this.berekenPrijsOmheining();
        this.totalePrijs = this.prijsOmheining + this.prijsPad;
        return totalePrijs;
    }

    @Override
    public String toString() {
        return "Zwembad{" +
                "straal=" + straal +
                ", breedtePad=" + breedtePad +
                ", oppervlaktePad=" + oppervlaktePad +
                ", omtrekPad=" + omtrekPad +
                ", eenheidsPrijsPad=" + eenheidsPrijsPad +
                ", eenheidsPrijsOmheining=" + eenheidsPrijsOmheining +
                ", cirkel=" + cirkel +
                '}';
    }

}
