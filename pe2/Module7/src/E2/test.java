package E2;

import E1.Boek;
import E1.Fictie;
import E1.Kookboek;

import java.time.LocalDate;

public class test {
  public static void main(String[] args) throws BoekNietInMandjeException {
    Klant joske = new Klant("Joske");
    Boek boek1 = new Fictie("Harry Potter", 12345);
    Boek boek2 = new Kookboek("Ons Kookboek", 2332, "Belgische");
    Boek boek3 = new Fictie("Mathilda", 22222);

    LocalDate aankoopdatum1 = LocalDate.now();
    LocalDate aankoopdatum2 = LocalDate.now().plusDays(3);

    joske.toevoegenAanMandje(boek1, aankoopdatum1);
    joske.toevoegenAanMandje(boek2, aankoopdatum2);

    System.out.println(joske);
     joske.verwijderUitMandje(boek3);
     joske.verwijderUitMandje(boek2);
  }
}
