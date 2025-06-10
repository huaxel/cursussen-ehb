package H1;

public class Product {
    private double prijs;
    private String merknaam;
    private int modelnummer;

    public Product(double prijs, String merknaam, int modelnummer) {
        this.prijs = prijs;
        this.merknaam = merknaam;
        this.modelnummer = modelnummer;
    }

    public double getPrijs() {
        return prijs;
    }


    public String getMerknaam() {
        return merknaam;
    }

    public int getModelnummer() {
        return modelnummer;
    }

    @Override
    public String toString() {
        return "Product{" +
                "prijs=" + prijs +
                ", merknaam='" + merknaam + '\'' +
                ", modelnummer=" + modelnummer +
                '}';
    }
}
