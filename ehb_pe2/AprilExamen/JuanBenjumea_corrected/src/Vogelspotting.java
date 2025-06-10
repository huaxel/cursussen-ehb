import org.jetbrains.annotations.NotNull;

public class Vogelspotting extends Spotting implements Comparable<Vogelspotting>{
  int vleugelspanwijdte;

  public Vogelspotting(String naam, int vleugelspanwijdte) {
    super(naam);
    this.vleugelspanwijdte = vleugelspanwijdte;
  }

  public int getVleugelspanwijdte() {
    return vleugelspanwijdte;
  }

  public void setVleugelspanwijdte(int vleugelspanwijdte) {
    this.vleugelspanwijdte = vleugelspanwijdte;
  }

  @Override
  public String toString() {
    return "Vogelspotting{" + "vleugelspanwijdte=" + vleugelspanwijdte + "} " + super.toString();
  }

@Override
  public int compareTo(@NotNull Vogelspotting v) {

    return Integer.compare(this.getVleugelspanwijdte(),v.getVleugelspanwijdte());
  }
}
