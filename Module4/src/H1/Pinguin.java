package H1;

public class Pinguin extends Vogel{
    public Pinguin(int geboorteDatum) {
        super(geboorteDatum);
    }

    @Override
    public void maakGeluid() {
        System.out.println("nothing");
    }
}
