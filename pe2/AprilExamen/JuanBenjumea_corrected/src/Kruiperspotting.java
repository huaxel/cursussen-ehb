public class Kruiperspotting extends Spotting implements Bedreigbaar {
  Kleur kleur;

  public Kruiperspotting(String naam, Kleur kleur) {
    super(naam);
    this.kleur = kleur;
  }

  @Override
  public void geefRisico() {
      Bedreigbaar.super.geefRisico();
  }

  @Override
  public String toString() {
    return "Kruiperspotting{" +
            "kleur=" + kleur +
            "} " + super.toString();
  }
}
