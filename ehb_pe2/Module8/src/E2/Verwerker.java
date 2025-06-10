/*
Eens de puntenlijst binnen is kan je deze gebruiken om een gemiddelde te berekenen.
Hiervoor heb je enkele zaken nodig die we nog niet hebben gezien.
De klasse String bevat een methode split(), aan deze methode kan je een karakter
meegeven zoals een komma en dit zal de tekst opdelen in een array van Strings.
Om een getalwaarde uit een String te krijgen kan je gebruik maken van de klasse
Double om dit om te zetten. Je kan gebruik maken van
double getal = Double.valueOf("1.618");

 */

package E2;

import E1.Reader;

import java.util.ArrayList;
import java.util.List;

public class Verwerker {
  private Reader reader;
  private String[] contentsArray;
  private List<Double> getallenLijst;

  public Verwerker() {
    reader = new Reader();
    String contents = reader.readFile("Module8/src/E1/test.csv");
    contentsArray = contents.split(",");
    getallenLijst = new ArrayList<>();
    verwerkGetallen();
  }

  public void verwerkGetallen() {
    for (String element : contentsArray) {
      try {
        double getal = Double.parseDouble(element.trim());
        getallenLijst.add(getal);
        System.out.println(getal);
      } catch (NumberFormatException e) {
        System.err.println("Invalid number format for element: " + element);
      }
    }
  }

  public static void main(String[] args) {
    new Verwerker();
  }
}
