import org.jetbrains.annotations.NotNull;

import java.util.Comparator;
import java.util.function.ToIntFunction;

public class Vogelspotting extends Spotting {
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

  public int compareTo(@NotNull Vogelspotting v) {
    if(this.getVleugelspanwijdte() > v.getVleugelspanwijdte()){
      return 1;
    } else if (this.getVleugelspanwijdte() < v.getVleugelspanwijdte()){
      return -1;
    } else {
      return 0;
    }
  }
}
