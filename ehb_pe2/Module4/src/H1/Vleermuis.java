package H1;

public class Vleermuis extends Zoogdier implements Vlieg {
    public Vleermuis(int geboorteDatum) {
        super(geboorteDatum);
    }

    @Override
    public void maakGeluid() {
        System.out.println("Piep piep");
    }
}
