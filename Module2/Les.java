package Module2;
import java.time.LocalDate;

public class Les {
    public static void main(String[] args) {
        String tekst = "Hello world";
        String tekstMetHoofdletters = tekst.toUpperCase();

        System.out.println(tekst);
        System.out.println(tekstMetHoofdletters + ", sorry voor de hoofdletters.");

        int[] cijferlijst = {12, 45, 42};
        // cijferlijst[3] = 128 ; niet mogelijk array heeft vaste grootte

        int[] legeCijferlijst = new int[10];
        String[] metroHaltes = {"Delacroix", "Clemenc", "Bizet"};
        metroHaltes[1] = "Clemenceau";

        for (int i = 0; i < metroHaltes.length; i++ ){
            System.out.println(metroHaltes[i]);
        }
        for(String halte : metroHaltes){
            System.out.println(halte);
        }

        LocalDate juni = LocalDate.of(2018,6,19);
        LocalDate datumVanTekst = LocalDate.parse("1986-09-03");
        LocalDate nu = LocalDate.now();
        LocalDate geschatteLevering = nu.plusWeeks(1);

        System.out.println(geschatteLevering);
    }
}
