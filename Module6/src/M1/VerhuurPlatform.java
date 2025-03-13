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
        return "VerhuurPlatform{" +
                "wagens=" + wagens +
                '}';
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
