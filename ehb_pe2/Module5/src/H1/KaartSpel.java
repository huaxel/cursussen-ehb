package H1;

import M1.Kaart;
import M1.Deck;
import java.util.Random;
import java.util.Scanner;

public class KaartSpel {
  public static void main(String[] args) {
    Random random = new Random();
    Scanner in = new Scanner(System.in);

    // nieuw deck van kaarten
    Deck deck = new Deck();
    Kaart[][] kaarten = deck.getKaarten();

    boolean playAgain = true;
    while (playAgain) {
      // willekeurige kaart
      int huidigeKleurIndex = random.nextInt(4);
      int huidigeWaardeIndex = random.nextInt(13);
      Kaart huidigeKaart = kaarten[huidigeKleurIndex][huidigeWaardeIndex];
      // volgende kaart
      int volgendeKleurIndex = random.nextInt(4);
      int volgendeWaardeIndex = random.nextInt(13);
      Kaart volgendeKaart = kaarten[volgendeKleurIndex][volgendeWaardeIndex];

      System.out.println("De huidige kaart is: " + huidigeKaart);
      System.out.println("Is de volgende kaart groter of kleiner? (typ 'groter' of 'kleiner')");

      String invoer = in.nextLine();

      if (invoer.equalsIgnoreCase("kleiner") && huidigeKaart.isHogerDan(volgendeKaart)
          || invoer.equalsIgnoreCase("hoger") && !huidigeKaart.isHogerDan(volgendeKaart)) {
        System.out.println("Correct! De volgende kaart is: " + volgendeKaart);
      } else {
        System.out.println("Incorrect! De volgende kaart is: " + volgendeKaart);
      }
      System.out.println("Wil je nog een keer spelen? (typ 'ja' of 'nee')");
      String opnieuw = in.nextLine();
      playAgain = opnieuw.equalsIgnoreCase("ja");
    }

    in.close();
  }
}
