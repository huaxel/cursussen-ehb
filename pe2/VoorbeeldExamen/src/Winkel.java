public class Winkel extends Eigendom implements Ownable {
  private String naam;

  public Winkel(String huisnummer, int verbruik, String naam) {
    super(huisnummer, verbruik);
    this.naam = naam;
  }

  public String getNaam() {
    return naam;
  }

  public void setNaam(String naam) {
    this.naam = naam;
  }

  @Override
  public void giveOwner() {
    System.out.println("Ik ben leeg");
  }
}
