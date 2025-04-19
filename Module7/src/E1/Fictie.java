package E1;

public class Fictie extends Boek{
    public Fictie (String titel, int ISBN){
        super(titel,ISBN,BoekType.FICTIE);
    }

    @Override
    public String toString() {
        return "Fictie{} " + super.toString();
    }
}
