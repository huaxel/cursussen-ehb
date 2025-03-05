package H1;

public class Tijger extends Zoogdier {
    public Tijger(int geboorteDatum) {
        super(geboorteDatum);
    }

    @Override
    public void maakGeluid() {
        System.out.println("Grrr...");
    }
}
