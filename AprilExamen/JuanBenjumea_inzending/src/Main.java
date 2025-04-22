public class Main {
  public static void main(String[] args) {
    Kruiperspotting kruiper = new Kruiperspotting("Kat", Kleur.GEEL);
    Vogelspotting vogel1 = new Vogelspotting("Arend", 100);
    Vogelspotting vogel2 = new Vogelspotting("Duif", 30);
    Vogelspotting vogel3 = new Vogelspotting("Merel", 60);
    /*  System.out.println(kruiper);
    System.out.println(vogel1);
    System.out.println(vogel2);
    System.out.println(vogel3);*/

    System.out.println(vogel2.compareTo(vogel3));
    System.out.println("///");

    VogelLocatieZone vogelLocatieZone = new VogelLocatieZone();
    vogelLocatieZone.addVogel(vogel1);
    vogelLocatieZone.addVogel(vogel2);
    vogelLocatieZone.addVogel(vogel3);
    System.out.println(vogelLocatieZone);
    System.out.println("///");

    vogelLocatieZone.geefGrootsteVogel();
    System.out.println("///");

    Park park = new Park(1070, "Astridpark");
    park.addSpotting(kruiper);
    park.addSpotting(vogel1);
    park.addSpotting(vogel2);
    park.addSpotting(vogel3);

    park.bewaarPark("park.txt");
  }
}
