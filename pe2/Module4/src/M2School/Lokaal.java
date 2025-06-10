package M2School;
import M1.Adres;

public class Lokaal {
    private String gebouw="A";
    private Adres adres=null;
    private int verdieping;
    private String lokaalNummer;

    public Lokaal(String gebouw, Adres adres, int verdieping, String lokaalNummer) {
        this.gebouw = gebouw;
        this.adres = adres;
        this.verdieping = verdieping;
        this.lokaalNummer = lokaalNummer;
    }

    public String getGebouw() {
        return gebouw;
    }

    public void setGebouw(String gebouw) {
        this.gebouw = gebouw;
    }

    public Adres getAdres() {
        return adres;
    }

    public void setAdres(Adres adres) {
        this.adres = adres;
    }

    public int getVerdieping() {
        return verdieping;
    }

    public void setVerdieping(int verdieping) {
        this.verdieping = verdieping;
    }

    public String getLokaalNummer() {
        return lokaalNummer;
    }

    public void setLokaalNummer(String lokaalNummer) {
        this.lokaalNummer = lokaalNummer;
    }

    @Override
    public String toString() {
        return "Lokaal{" +
                "gebouw='" + gebouw + '\'' +
                ", adres=" + adres +
                ", verdieping=" + verdieping +
                ", lokaalNummer='" + lokaalNummer + '\'' +
                '}';
    }
}
