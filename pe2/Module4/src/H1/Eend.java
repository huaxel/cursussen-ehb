package H1;

public class Eend extends Vogel implements Vlieg, Zwem {
    public Eend(int geboorteDatum) {
        super(geboorteDatum);
    }

    @Override
    public void maakGeluid() {
        System.out.println("quack quack");
    }
}
