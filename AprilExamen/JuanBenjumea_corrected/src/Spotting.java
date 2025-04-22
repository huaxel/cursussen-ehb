import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

public abstract class Spotting implements Serializable {
  private String naam;
  private LocalDateTime moment;

  public Spotting(String naam) {
    this.naam = naam;
    this.moment = LocalDateTime.now();
  }

  public String getNaam() {
    return naam;
  }

  public void setNaam(String naam) {
    this.naam = naam;
  }

  public LocalDateTime getMoment() {
    return moment;
  }

  public void setMoment(LocalDateTime moment) {
    this.moment = moment;
  }

  @Override
  public String toString() {
    return "Spotting{" +
            "naam='" + naam + '\'' +
            ", moment=" + moment +
            '}';
  }
@Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if ((obj == null || getClass() != obj.getClass())) return false;
    return Objects.equals(moment,((Spotting) obj).moment) && Objects.equals(naam, ((Spotting) obj).naam);

  }
}
