/*
H1: Een universele rekening

Ontwikkel een klasse UniverseleRekening
om te werken met gedeelde bankrekeningen.
Je mag starten met de klasse bankrekening
en voegt hieraan een verzameling volmachthebbers toe.
Een volmachthebber heeft het recht om geld af te halen
van de universele rekening. Een universele rekening kan
meerdere volmachthouders hebben. De klasse UniverseleRekening
bevat verder volgende functionaliteiten:

    toevoegenVolmacht: geeft een bepaalde persoon
    toegang tot de universele rekening

    verwijderenVolmacht: neemt een bepaalde persoon
    de toegang tot de universele rekening af

    controleerVolmacht: controleert of een gegeven
    persoon een volmachthebber is van de universele rekening,

    toonVolmachthebbers: geeft een lijst van de volmachthebbers
    van deze rekening gesorteerd op naam.

    Voorzie de exception PersoonHeeftGeenVolmacht en gebruik
    deze op de gepaste plaatsen (bv. afhalen zonder volmacht).

 */
package H1;

import M1.BankRekening2;
import java.util.TreeSet;

public class UniverseleRekening extends BankRekening2 {
  private TreeSet<String> volmachthebbers;

  UniverseleRekening(double rekeningstand) {
    super(rekeningstand);
    this.volmachthebbers = new TreeSet<>();
  }
  UniverseleRekening(){
    super();
    this.volmachthebbers = new TreeSet<>();
  }

  public TreeSet<String> getVolmachthebbers() {
    return volmachthebbers;
  }

  public void toevoegenVolmacht(String naam) {
    volmachthebbers.add(naam);
    System.out.printf("%s werd toegevoegd aan de lijst volmachthebbers%n", naam);
  }

  public void verwijderenVolmacht(String naam) {
    try {
      if (volmachthebbers.contains(naam)) {
        volmachthebbers.remove(naam);
        System.out.printf("%s werd verwijderd uit de lijst volmachthebbers%n", naam);
      } else {
        throw new PersoonHeeftGeenVolmacht();
      }
    } catch (PersoonHeeftGeenVolmacht e) {
      System.out.println(e.getMessage());
    }
  }

  private boolean controleerVolmacht(String naam) {
    boolean heeftVolmacht = volmachthebbers.contains(naam);
    System.out.printf("%s is %svolmachthebber%n", naam, heeftVolmacht ? "" : "geen ");
    return heeftVolmacht;
  }

  public void toonVolmachthebbers() {
    if (volmachthebbers.isEmpty()) {
      System.out.println("Er zijn geen volmachthebbers");
    } else {
      System.out.println("Volmachthebbers");
      for (String naam : volmachthebbers) {
        System.out.println(naam);
      }
    }
  }

  public void geldAfhalen(double bedrag, String naam) {
    uivoerenMetVolmacht(bedrag, naam, () -> super.geldAfhalen(bedrag));
  }

  public void geldStorten(double bedrag, String naam) {
    uivoerenMetVolmacht(bedrag, naam, () -> super.geldStorten(bedrag));
  }

  @Override
  public void geldAfhalen(double bedrag){
    throw new UnsupportedOperationException("Geef de naam van de volmachthebber");
  }
  @Override
  public void geldStorten(double bedrag){
    throw new UnsupportedOperationException("Geef de naam van de volmachthebber");
  }

  public void uivoerenMetVolmacht(double bedrag, String naam, Runnable actie) {
    try {
      if (!controleerVolmacht(naam)) {
        throw new PersoonHeeftGeenVolmacht();
      } else {
        actie.run();
      }
    } catch (PersoonHeeftGeenVolmacht e) {
      System.out.println(e.getMessage());
    }
  }
}
