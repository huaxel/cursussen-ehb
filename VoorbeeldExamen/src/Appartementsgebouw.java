import java.util.SortedSet;
import java.util.TreeSet;

public class Appartementsgebouw implements Ownable {
  private SortedSet<Appartement> appartementen = new TreeSet<>();

  public void voegToe(Appartement appartement) {
    appartementen.add(appartement);
  }

  public int geefTotaalVerbruik() {
    int totaalVerbruik = 0;
    for (Appartement appartement : appartementen) {
      totaalVerbruik += appartement.getVerbruik();
    }
    System.out.printf("Het totale verbruik is: %d", totaalVerbruik);
    return totaalVerbruik;
  }

  @Override
  public String toString() {
    return "Appartementsgebouw{" + "appartementen=" + appartementen + '}';
  }

  @Override
  public void giveOwner() {}
}
