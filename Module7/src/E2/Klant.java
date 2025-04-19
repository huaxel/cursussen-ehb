/*
Maak een klasse Klant.
Iedere klant heeft een naam en een boodschappenmandje.
In een boodschappenmand worden boeken (key) gekoppeld
aan de aankoopdatum (value). Voorzie de volgende methoden:

    toevoegenAanMandje(): Aan deze methode geef
    je een boek mee om dit aan een klant zijn mandje
    toe te voegen.

    verwijderUitMandje(): Verwijdert een boek uit het mandje
    en gooit een BoekNietInMandjeException wanneer het boek
    zich niet in het mandje bevindt.

 */

package E2;

import E1.Boek;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class Klant {
    private String naam;
    private HashMap<Boek, LocalDate> boodschappenMandje;

    public Klant(String naam){
        this.naam = naam;
        this.boodschappenMandje = new HashMap<>();
    }

    public void toevoegenAanMandje(Boek boek, LocalDate aankoopdatum){
        boodschappenMandje.put(boek,aankoopdatum);
    }
    public void verwijderUitMandje (Boek boek) throws BoekNietInMandjeException{
        try {if (boodschappenMandje.containsKey(boek)){
            boodschappenMandje.remove(boek);
        System.out.println(String.format("Het boek %s is uit het mandje verwijderd", boek.getTitel()));
        } else {
            throw new BoekNietInMandjeException(String.format("Het boek %s zit niet in het mandje", boek.getTitel()));
        }}
        catch (BoekNietInMandjeException e){
      System.out.println(e.getMessage());
        }
    }

    public String getNaam() {
        return naam;
    }

    public HashMap<Boek, LocalDate> getBoodschappenMandje() {
        return boodschappenMandje;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("Klant: " + naam + "\nBoodschappendmandje:\n");
        for (Map.Entry<Boek,LocalDate> entry : boodschappenMandje.entrySet()){
           sb.append(entry.getKey().toString()).append(" - Aankoopdatum: ").append(entry.getValue()).append("\n");
        }
        return sb.toString();
    }
}