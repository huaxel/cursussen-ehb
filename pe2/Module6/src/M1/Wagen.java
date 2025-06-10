package M1;

public class Wagen {
    private int serienummer;
    private String brandstoftype;
    private int zitplaatsen;
    private boolean verhuurd;

    public Wagen(int serienummer, String brandstoftype, int zitplaatsen) {
        this.serienummer = serienummer;
        this.brandstoftype = brandstoftype;
        this.zitplaatsen = zitplaatsen;
        this.verhuurd = false;
    }

    public int getSerienummer() {
        return serienummer;
    }

    public void setSerienummer(int serienummer) {
        this.serienummer = serienummer;
    }

    public String getBrandstoftype() {
        return brandstoftype;
    }

    public void setBrandstoftype(String brandstoftype) {
        this.brandstoftype = brandstoftype;
    }

    public int getZitplaatsen() {
        return zitplaatsen;
    }

    public void setZitplaatsen(int zitplaatsen) {
        this.zitplaatsen = zitplaatsen;
    }

    public boolean isVerhuurd() {
        return verhuurd;
    }

    public void verhuur() {
        this.verhuurd = true;
    }

    public void terugbrengen(){
        this.verhuurd = false;
    }

    @Override
    public String toString() {
        return String.format("Wagen [Serienummer: %d, Brandstoftype: %s, Zitplaatsen: %d, Verhuurd: %b]",
                serienummer, brandstoftype, zitplaatsen, verhuurd);
    }
}
