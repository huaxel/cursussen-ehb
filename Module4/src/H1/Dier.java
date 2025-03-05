package H1;

public abstract class Dier {
    private int geboorteDatum;

    public Dier(int geboorteDatum) {
        this.geboorteDatum = geboorteDatum;
    }

    public int getGeboorteDatum() {
        return geboorteDatum;
    }

    public void setGeboorteDatum(int geboorteDatum) {
        this.geboorteDatum = geboorteDatum;
    }

    public abstract void maakGeluid();

    @Override
    public String toString() {
        return "Dier{" +
                "geboorteDatum=" + geboorteDatum +
                '}';
    }
}
