package H1;

public class Smartphone extends Product {
    private SchermResolutie schermResolutie;

    public Smartphone(double prijs, String merknaam, int modelnummer, SchermResolutie schermResolutie) {
        super(prijs, merknaam, modelnummer);
        this.schermResolutie = schermResolutie;
    }

    public SchermResolutie getSchermResolutie() {
        return schermResolutie;
    }

    public void setSchermResolutie(SchermResolutie schermResolutie) {
        this.schermResolutie = schermResolutie;
    }

    @Override
    public String toString() {
        return "Smartphone{" +
                "prijs=" + getPrijs() + ", " +
                "merknaam='" + getMerknaam() + '\'' + ", " +
                "modelnummer=" + getModelnummer() + ", " +
                "schermResolutie=" + schermResolutie.getResolutie() +
                "} " ;
    }

}

