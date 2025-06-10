import E1.Persoon;
import E2.Zwembad;
import M1.Adres;

public class Main {
    public static void main(String[] args) {
        Adres adresJuan = new Adres("Ietsstraat",22,null,1070, "Anderlecht");
        Adres adresJos = new Adres("Ilistraat",32,"3",1030, "Schaarbeek");
        Persoon test1 = new Persoon("Juan", "Benjumea","mail@mail.com",adresJuan);
        Persoon Jos = new Persoon("Jos", "Trip", "los@eai.com",adresJos);
        System.out.println(test1);
        System.out.println(Jos);
        System.out.println(Persoon.getAantalPersonen());

        Zwembad testZwembad = new Zwembad(20,2,40,50);
        System.out.println(testZwembad.berekenTotalePrijs());
    }
}