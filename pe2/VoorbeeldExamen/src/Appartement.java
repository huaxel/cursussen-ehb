public class Appartement extends Eigendom implements Comparable<Appartement> {
  private int busnummer;

  public Appartement(String huisnummer, int verbruik, int busnummer) {
    super(huisnummer, verbruik);
    this.busnummer = busnummer;
  }

  public int getBusnummer() {
    return busnummer;
  }

  public void setBusnummer(int busnummer) {
    this.busnummer = busnummer;
  }

  @Override
  public String toString() {
    return "Appartement{" +
            "busnummer=" + busnummer +
            "} " + super.toString();
  }

  @Override
  public int compareTo(Appartement other) {
    return Integer.compare(this.busnummer, other.busnummer);
  }
}
