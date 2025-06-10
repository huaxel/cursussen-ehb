import java.util.TreeSet;

public class VogelLocatieZone {
  private TreeSet<Vogelspotting> vogelspottings;

  public VogelLocatieZone() {
    this.vogelspottings = new TreeSet<>();
  }

  public Vogelspotting geefGrootsteVogel() {
    Vogelspotting grootste = vogelspottings.last();
    System.out.println(grootste);
    return grootste;
  }

  public void addVogel(Vogelspotting vogel1) {
    vogelspottings.add(vogel1);
  }

  @Override
  public String toString() {
    return "VogelLocatieZone{" +
            "vogelspottings=" + vogelspottings +
            '}';
  }
}
