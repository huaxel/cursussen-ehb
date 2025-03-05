package lesOvererving.vormen;

public abstract class Vorm {
    // properties
    private String kleur;

    // functions
    public Vorm() {
        this.kleur = "Blue";
    }

    public Vorm(String kleur) {
        this.kleur = kleur;
    }

    public String getKleur() {
        return kleur;
    }

    public void setKleur(String kleur) {
        this.kleur = kleur;
    }

    @Override
    public String toString() {
        return "Vorm{" +
                "kleur='" + kleur + '\'' +
                '}';
    }

    public abstract double berekenOppervlakte();
}
