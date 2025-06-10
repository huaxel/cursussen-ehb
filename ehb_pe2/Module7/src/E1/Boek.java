/*
De boekhandel heeft een groot assortiment aan boeken.
De boeken zijn onderverdeeld in fictie en non-fictie.
In deze proefapplicatie beperken wij ons voor de non-fictie
afdeling tot kookboeken en biografieën, fictie hoeft niet
onderverdeeld te worden. Alle boeken hebben een titel en
worden automatisch van een code voorzien (ISBN) die nooit
kan worden gewijzigd. Zorg ervoor dat twee boeken identiek
aan elkaar zijn wanneer hun code en hun titel identiek is.
Hiervoor kan je gebruik maken van de equals() methode.
 */

package E1;

import java.util.Objects;

public abstract class Boek {
  private String titel;
  private int ISBN;
  private BoekType type;

  public Boek(String titel, int ISBN, BoekType type) {
    this.titel = titel;
    this.ISBN = ISBN;
    this.type = type;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Boek boek = (Boek) obj;
    return ISBN == boek.ISBN && Objects.equals(titel, boek.titel);
  }

  @Override
  public int hashCode() {
    return Objects.hash(titel, ISBN);
  }

  public String getTitel() {
    return titel;
  }

  public int getISBN() {
    return ISBN;
  }

  @Override
  public String toString() {
    return "Boek{" +
            "titel='" + titel + '\'' +
            ", ISBN=" + ISBN +
            ", type=" + type +
            '}';
  }
}
