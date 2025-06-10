/*
@1: En nog een laatste
Voorzie een ruw systeem waarbinnen boodschappen toegevoegd kunnen worden aan schermen binnen de hogeschool.
    De klasse Message bevat
    een postdatum (die niet meer mag worden aangepast na creatie),
    een einddatum
    en een inhoud.
    Voorzie de nodige constructors, getters en setters.
    Wat de inhoud betreft is dit nog een abstract gegeven.
    Je zal specifiekere message classes nodig hebben om dit te kunnen invullen.
    De klasse Board bestaat uit een aantal (een array) Message objecten.
    Hier moeten dus methoden in worden voorzien om een bericht te posten en te verwijderen,
    dat kan je voorstellen door een Message aan de array toe te voegen of deze te verwijderen
 */
package Challenge;

import java.time.LocalDate;

public class testChallenge {
    public static void main(String[] args) {
        Aankondiging testAankondiging = new Aankondiging(LocalDate.parse("2025-01-01"),LocalDate.parse("2025-01-28"),"snsierntsir");
        Evenement testEvenement = new Evenement(LocalDate.parse("2025-01-01"),LocalDate.parse("2025-01-28"),"snsierntsir", "Brussel");
        Board testBoard = new Board();
        System.out.println(testBoard);
        testBoard.addMessage(testAankondiging,testEvenement);
        System.out.println(testBoard);

    }


}
