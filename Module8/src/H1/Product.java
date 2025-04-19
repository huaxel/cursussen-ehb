/*
 Maak een klasse Product, producten hebben een naam en een prijs.
 Maak vervolgens een klasse factuur waarbinnen je naast de factuurdatum
 tevens een Collection van producten kan bijhouden. Voorzie binnen deze klasse
 ook een methode genereerFactuur. Binnen deze methode stel je een String samen
 waarbinnen je alle producten en totaalprijs plaatst. Eens je de String hebt
 opgebouwd gebruik je een Writer om dit naar een bestand weg te schrijven.
 Neem voor de bestandsnaam de huidige datum en tijd.
 */
package H1;

public class Product {
    private String naam;
    private double prijs;

    public Product(String naam, double prijs) {
        this.naam = naam;
        this.prijs = prijs;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public double getPrijs() {
        return prijs;
    }

    public void setPrijs(double prijs) {
        this.prijs = prijs;
    }


}
