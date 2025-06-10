import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Straat {
  private int postcode;
  private String naam;
  private List<Eigendom> eigendommen;

  public Straat(int postcode, String naam) {
    this.postcode = postcode;
    this.naam = naam;
    this.eigendommen = new ArrayList<>();
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Straat straat = (Straat) obj;
    return postcode == straat.postcode && Objects.equals(naam, straat.naam);
  }

  public void voegEigendomtoe(Eigendom eigendom) {
    eigendommen.add(eigendom);
  }

  public int geefVerbruikHuisnummer(String huisnummer) throws EigendomNietAanwezigException {
    for (Eigendom eigendom : eigendommen) {
      if (eigendom.getHuisnummer().equals(huisnummer)) {
        return eigendom.getVerbruik();
      }
    }
    throw new EigendomNietAanwezigException();
  }

  public String getOverzicht() {
    StringBuilder overzicht = new StringBuilder();
    overzicht.append("Straatnaam: ").append(this.naam).append(System.lineSeparator());
    overzicht.append("Postcode: ").append(this.postcode).append(System.lineSeparator());
    for (Eigendom eigendom : eigendommen) {
      overzicht
          .append("Huisnummer: ")
          .append(eigendom.getHuisnummer())
          .append(" - Verbruik: ")
          .append(eigendom.getVerbruik())
          .append(System.lineSeparator());
    }
    return overzicht.toString();
  }

  public void bewaarStraat(String filepath) {
    try (BufferedWriter writer = new BufferedWriter(new FileWriter(filepath))) {
      writer.write(this.getOverzicht());
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
