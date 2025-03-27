/*
 Onze startup heeft nood aan een systeem om de
 verhuur van wagens bij te kunnen houden.
 Zorg voor een collection waar je een nummerplaat
 aan een wagen kan koppelen.
 Om het voor ons eenvoudig te houden sorteren
 we alles alfabetisch op de nummerplaat.
 Voor de nummerplaten mag je een String gebruiken,
 voor de wagens maak je een aparte klasse.
 De klasse Wagen bevat een serienummer, brandstoftype,
 aantal zitplaatsen en een boolean om te weten of de
 wagen verhuurd is. Voorzie zeker een methode om wagens op
 te zoeken aan de hand van een nummerplaat en methodes om
 een wagen te verhuren.
 */

package M1;
import java.util.TreeMap;

public class VerhuurPlatform {
    private TreeMap<String,Wagen> wagens;
    public VerhuurPlatform(){
        this.wagens = new TreeMap<>();
    }
    public void addWagen(String nummerplaat,Wagen wagen){
        wagens.put(nummerplaat, wagen);
    }
    public boolean verhuurWagen(String nummerplaat){
        Wagen wagen = wagens.get(nummerplaat);
        if (wagen != null && !wagen.isVerhuurd()){
            wagen.verhuur();
            return true;
        }
        return false;
    }

    public boolean terugbrengWagen(String nummerplaat){
        Wagen wagen = wagens.get(nummerplaat);
        if (wagen != null && wagen.isVerhuurd()){
            wagen.terugbrengen();
            return true;
        }
        return false;
    }

    public boolean verhuurWagen(Wagen wagen){
        if (wagen != null && !wagen.isVerhuurd()){
            wagen.verhuur();
            return true;
        }
        return false;
    }

    public boolean terugbrengWagen(Wagen wagen){
        if (wagen != null && wagen.isVerhuurd()){
            wagen.terugbrengen();
            return true;
        }
        return false;
    }

    public Wagen zoekWagen(String nummerplaat){
        return wagens.get(nummerplaat);
    }
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("VerhuurPlatform:\n");
        for (String nummerplaat : wagens.keySet()) {
            sb.append(nummerplaat).append(" -> ").append(wagens.get(nummerplaat)).append("\n");
        }
        return sb.toString();
    }

    public static void main(String[] args){
        VerhuurPlatform testPlatform = new VerhuurPlatform();
        Wagen audi = new Wagen(123,"Benzine",2);
        Wagen opel = new Wagen(345,"Diesel",5);
        Wagen ford = new Wagen(789, "Elektrisch",9);

        testPlatform.addWagen("8090-ABC", audi);
        testPlatform.addWagen("3333-HDT",opel);
        testPlatform.addWagen("4567-HJN",ford);

        testPlatform.verhuurWagen(opel);
        testPlatform.verhuurWagen("3333-HDT");
        testPlatform.terugbrengWagen("8090-ABC");
        System.out.println(testPlatform);
    }
}
