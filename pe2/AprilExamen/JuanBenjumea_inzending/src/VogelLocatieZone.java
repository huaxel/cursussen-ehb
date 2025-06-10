import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class VogelLocatieZone {
  private List<Vogelspotting> vogelspottings;
  Comparator<Vogelspotting> cmp = Comparator.comparingInt(Vogelspotting::getVleugelspanwijdte);

  public VogelLocatieZone() {
    this.vogelspottings = new ArrayList<>();
  }

  public Vogelspotting geefGrootsteVogel() {
    vogelspottings.sort(cmp);
    Vogelspotting grootste = vogelspottings.getLast();
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
