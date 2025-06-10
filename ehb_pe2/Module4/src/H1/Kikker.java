package H1;

public class Kikker extends Amfibie {
    public Kikker(int geboorteDatum) {
        super(geboorteDatum);
    }
    @Override
    public void maakGeluid(){
        System.out.println("croac croac...");
    }
}
