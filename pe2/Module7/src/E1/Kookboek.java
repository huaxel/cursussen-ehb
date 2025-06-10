package E1;

public class Kookboek extends NonFictie{
    private String keuken;

    public Kookboek(String titel, int ISBN, String keuken){
        super(titel,ISBN);
        this.keuken = keuken;
    }

    public String getKeuken() {
        return keuken;
    }

    @Override
    public String toString() {
        return "Kookboek{" +
                "keuken='" + keuken + '\'' +
                "} " + super.toString();
    }
}
