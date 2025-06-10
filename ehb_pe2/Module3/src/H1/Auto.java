package H1;

/*
H1: Klasse Auto

[x] Maak een klasse Auto.
[x] Een auto heeft een kilometerteller,
[x] een brandstoftank met een inhoud in liter
[x] en een verbruik (aantal liter per 100 km).
Gebruik voor deze gegevens een double als datatype.

[x]
Voorzie minstens twee constructors,
één die toelaat aan alle gegevens een beginwaarde te geven
en één die werkt met een aantal default waarden (nieuwe auto, lege tank).
Je hoeft geen bijkomende controles uit te voeren.
Je mag er van uitgaan dat de gebruiker altijd realistische waarden gebruikt.

Voorzie een methode om de tank bij te vullen (altijd tot ze vol is).
Voorzie een methode om een gegeven aantal km te rijden.
In dit geval telt de kilometerteller altijd vooruit (ook als je een negatief getal ingeeft).
Er wordt steeds brandstof verbruikt.
Hou er rekening mee dat er mogelijk te weinig brandstof kan zijn om de volledige afstand te rijden.
In dat geval wordt er gereden tot de tank leeg is.
In alle andere gevallen geeft de methode het aantal gereden km als returnwaarde.

Voorzie ook een methode om alle relevante gegevens van een Auto object af te drukken.
 */
public class Auto {
    private double kmTeller;
    private double capaciteitTank;
    private double inhoudTank;
    private double verbruikLiter100km;
    private static final double DEFAULT_KMTELLER = 0;
    private static final double DEFAULT_INHOUD = 0;

    // auto met alle parameters
    public Auto(double kmTeller, double capaciteitTank, double inhoudTank, double verbruikLiter100km) {
        this.kmTeller = kmTeller;
        this.capaciteitTank = capaciteitTank;
        this.inhoudTank = inhoudTank;
        this.verbruikLiter100km = verbruikLiter100km;
    }

    // nieuwe auto met defaults
    public Auto(double capaciteitTank, double verbruikLiter100km) {
        this.kmTeller = DEFAULT_KMTELLER;
        this.capaciteitTank = capaciteitTank;
        this.inhoudTank = DEFAULT_INHOUD;
        this.verbruikLiter100km = verbruikLiter100km;
    }

    public double getKmTeller() {
        return kmTeller;
    }

    public void setKmTeller(double kmTeller) {
        this.kmTeller = kmTeller;
    }

    public double getCapaciteitTank() {
        return capaciteitTank;
    }

    public void setCapaciteitTank(double capaciteitTank) {
        this.capaciteitTank = capaciteitTank;
    }

    public double getInhoudTank() {
        return inhoudTank;
    }

    public void setInhoudTank(double inhoudTank) {
        this.inhoudTank = inhoudTank;
    }

    public double getVerbruikLiter100km() {
        return verbruikLiter100km;
    }

    public void setVerbruikLiter100km(double verbruikLiter100km) {
        this.verbruikLiter100km = verbruikLiter100km;
    }

    public double vulTank() {
        this.inhoudTank = this.capaciteitTank;
        return this.inhoudTank;
    }

    public double rijKilometers(double kilometers) {
        double kilometersABS = Math.abs(kilometers);
        double rijcapaciteit = this.inhoudTank / this.verbruikLiter100km * 100;
        double geredenKM = Math.min(kilometersABS, rijcapaciteit);
        this.kmTeller += geredenKM;
        this.inhoudTank -= geredenKM / 100 * this.verbruikLiter100km;

        return geredenKM;
    }

    public void print() {
        String formatAuto = String.format("Jouw auto heeft een brandstoftank met capaciteit van %.0f liter, waarvan nu met %.2f liter gevuld. %nHet verbruikt %.2f liter per 100 km. %nHet heeft %.2f km's op de teller", this.capaciteitTank, this.inhoudTank, this.verbruikLiter100km, this.kmTeller);

        System.out.println(formatAuto);
    }

    public static void main(String[] args){
        Auto testAuto = new Auto(100,6);
        testAuto.vulTank();
        testAuto.rijKilometers(20);
        testAuto.print();
    }

}
