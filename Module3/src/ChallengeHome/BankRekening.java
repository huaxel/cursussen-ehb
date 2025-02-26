package ChallengeHome;

/*
Op een BankRekening staat een bepaald rekeningStand.
Voorzie een default constructor die dat rekeningStand op 0.0 zet,
en een tweede constructor die toelaat om een positieve double door te geven.
Als er een negatief getal doorgegeven wordt, mag je het rekeningStand van de bankrekening op 0 zetten.

Voorzie een getter en setter voor het rekeningStand.
We laten niet toe dat de gebruiker de setter zelf mag gebruiken,
gebruik de juiste zichtbaarheid dat de setter enkel binnen deze klasse zelf gebruikt kan worden.

Voorzie methoden om geld te storten en om geld af te halen.
Bij een afhaling mag je onder 0 gaan, maar niet meer dan 1000 euro.
Als dat wel het geval zou zijn, mag je de afhaling weigeren en voert de functie niets uit.
Druk in dat geval een foutmelding af in de console.
 */
public class BankRekening {
    private double rekeningStand;
    private static final double DEFAULT_STAND = 0;

    public BankRekening() {
        this.rekeningStand = DEFAULT_STAND;
    }

    public BankRekening(double rekeningStand) {
        this.setRekeningStand(rekeningStand);
    }

    protected void setRekeningStand(double rekeningStand) {
        if (rekeningStand < 0) {
            this.rekeningStand = DEFAULT_STAND;
        } else {
            this.rekeningStand = rekeningStand;
        }
    }

    public double getRekeningStand() {
        System.out.printf("%nDe stand van je rekening is %.2f euro", this.rekeningStand);
        return this.rekeningStand;
    }

    public double stortBedrag(double storting) {
        if (storting < 0) {
            System.out.println("Gelieve een positieve waarde in te geven.");
        } else {
            this.rekeningStand += storting;
            System.out.printf("%nJe hebt %.2f euro gestort, de stand van je rekening is %.2f euro%n", storting, this.rekeningStand);
        }
        return this.rekeningStand;
    }

    public double haalBedrag(double afhaling) {
        if (afhaling < 0) {
            System.out.println("Gelieve een positieve waarde in te geven.");
        } else if (this.rekeningStand - afhaling < -1000) {
            System.out.println("Je mag niet zo diep in het rood gaan.");
        } else {
            this.rekeningStand -= afhaling;
            System.out.printf("%nJe hebt %.2f euro afgehaald, de stand van je rekening is %.2f euro%n", afhaling, this.rekeningStand);
        }
        return this.rekeningStand;
    }

    public static void main(String[] args) {
        BankRekening legeRek = new BankRekening();
        BankRekening volleRek = new BankRekening(2000000);
        legeRek.getRekeningStand();
        legeRek.setRekeningStand(11);
        legeRek.getRekeningStand();
        legeRek.stortBedrag(2000);
        volleRek.haalBedrag(1000000000);

    }
}

