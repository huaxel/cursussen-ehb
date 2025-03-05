package M2School;

public class Bediende extends Personeelslid{
    public Bediende(String voornaam, String achternaam, Lokaal lokaal) {
        super(voornaam, achternaam, lokaal);
    }
    protected void wijzigLokaalVanDocent(Docent docentNaam, Lokaal lokaalNaam){
        docentNaam.setLokaal(lokaalNaam);
    }
}
