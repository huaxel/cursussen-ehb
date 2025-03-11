package H1;
import M1.Kaart;
import M1.Deck;
import java.util.Random;
import java.util.Scanner;


public class KaartSpel {
    public static void main(String[] args) {
        Random random = new Random();

        //nieuw deck van kaarten
        Deck deck = new Deck();
        Kaart[][] kaarten = deck.getKaarten();

        //willekeurige kaart
        int huidigeKleurIndex = random.nextInt(4);
        int huidigeWaardeIndex = random.nextInt(13);
        Kaart huidigeKaart = kaarten[huidigeKleurIndex][huidigeWaardeIndex];

        int volgendeKleurIndex = random.nextInt(4);
        int volgendeWaardeIndex = random.nextInt(13);
        Kaart volgendeKaart = kaarten[volgendeKleurIndex][volgendeWaardeIndex];

        System.out.println("De huidige kaart is: " + huidigeKaart);
        System.out.println("Is de volgende kaart groter of kleiner? ");

        Scanner in = new Scanner(System.in);
        String invoer = in.nextLine();

        if (invoer = "groter" && volgendeKaart.getWaarde() > huidigeKaart.getWaarde() ||invoer = "kleiner" && huidigeKaart  )

        while ()

        in.close();
    }
}
