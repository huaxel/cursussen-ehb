/*
M2: Een complexere hiërarchie
Voor de volgende opdracht kan het enorm helpen om op voorhand een schema te maken zodat je een idee hebt hoe alles in elkaar past.
Denk zelf na over de gepaste types en hoe alles in elkaar past.
We schrijven enkele classes die een school gaan voorstellen, hiervoor hebben we verschillende klassen (gniffel) nodig.
    - We hebben verschillende personen, de gezamenlijke gegevens zoals een voor- en achternaam komen in een klasse Persoon.
        - Verder hebben we nog specifiekere personen
    - Student is een Persoon en heeft verder nog:
        - een studentennummer
        - een specialisatie (bv. TI, MCT, ...)
    - Docenten zijn personeelsleden met:
        - specialisatie
        - lokaal
    - Bedienden zijn ook personeelsleden en hebben ook een lokaal
    - Lokaal bestaat uit een adres, gebouw (bv. blok A), een verdieping en lokaalnummer
Als uitdaging probeer je de volgende functies te laten werken:
    Docenten begeleiden meerdere studenten, probeer er voor te zorgen dat een docent meerdere studenten toegewezen krijgt, hiervoor kan je een array bekijken.
    Bedienden kunnen een lokaal wijzigen van andere personeelsleden, zorg er voor dat deze functie enkel binnen de school (package) gebruikt kan worden.
 */

package M2School;

public class testM2 {
    public static void main(String[] args) {
        Student johan = new Student("Johan", "Peeters", 1, "TI" );
        Lokaal a04 = new Lokaal("A",null,3,"A04");
        Lokaal a05 = new Lokaal("A",null,3,"A05");
        Docent tom = new Docent("Tom", "Janssen",a04,"TI");
        Bediende Piet = new Bediende("Piet", "Tommers", a04);
        System.out.println(tom);
        Piet.wijzigLokaalVanDocent(tom,a05);
        System.out.println(tom);
        tom.begeleidStudent(johan,new Student("rs","rat",2,"srt"));
        System.out.println(tom);

    }
}
