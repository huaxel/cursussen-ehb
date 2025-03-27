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

public class Boek {
    private String titel;
    private int ISBN;

    public Boek(String titel, int ISBN) {
        this.titel = titel;
        this.ISBN = ISBN;
    }
}
