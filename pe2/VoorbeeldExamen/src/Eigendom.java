public abstract class Eigendom {
    private String huisnummer;
    private int verbruik;

    public Eigendom(String huisnummer, int verbruik) {
        this.huisnummer = huisnummer;
        this.verbruik = verbruik;
    }

    public String getHuisnummer() {
        return huisnummer;
    }

    public void setHuisnummer(String huisnummer) {
        this.huisnummer = huisnummer;
    }

    public int getVerbruik() {
        return verbruik;
    }

    public void setVerbruik(int verbruik) {
        this.verbruik = verbruik;
    }

    @Override
    public String toString() {
        return "Eigendom{" +
                "huisnummer='" + huisnummer + '\'' +
                ", verbruik=" + verbruik +
                '}';
    }
}
