package E1;

public class Biografie extends NonFictie{
    private String onderwerp;

    public String getOnderwerp() {
        return onderwerp;
    }

    public Biografie (String titel, int ISBN, String onderwerp){
        super(titel, ISBN);
        this.onderwerp = onderwerp;

    }
}
