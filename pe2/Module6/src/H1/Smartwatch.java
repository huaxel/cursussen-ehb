package H1;

public class Smartwatch extends Product{
    private Vorm vorm;

    public Smartwatch(double prijs, String merknaam, int modelnummer, Vorm vorm) {
        super(prijs, merknaam, modelnummer);
        this.vorm = vorm;
    }

    public Vorm getVorm() {
        return vorm;
    }

    public void setVorm(Vorm vorm) {
        this.vorm = vorm;
    }

}
