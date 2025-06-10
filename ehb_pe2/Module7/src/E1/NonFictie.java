package E1;

public abstract class NonFictie extends Boek{
public NonFictie(String titel, int ISBN){
    super(titel, ISBN, BoekType.NON_FICTIE);
}
}
