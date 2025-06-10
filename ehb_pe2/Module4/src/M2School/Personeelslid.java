package M2School;

public abstract class Personeelslid extends Persoon {
    private Lokaal lokaal;
    public Personeelslid(String voornaam, String achternaam, Lokaal lokaal) {
        super(voornaam, achternaam);
        this.lokaal = lokaal;
    }

    public Lokaal getLokaal() {
        return lokaal;
    }

    public void setLokaal(Lokaal lokaal) {
        this.lokaal = lokaal;
    }

    @Override
    public String toString() {
        return "Personeelslid{" +
                "lokaal=" + lokaal +
                "} " + super.toString();
    }
}
