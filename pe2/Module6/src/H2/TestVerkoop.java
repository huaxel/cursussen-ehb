package H2;
import H1.SchermResolutie;
import H1.Smartphone;
import H1.Smartwatch;
import H1.Vorm;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class TestVerkoop {
    private List<Smartphone> smartphones;
    private List<Smartwatch> smartwatches;

    public TestVerkoop (){
        smartphones = new ArrayList<>();
        smartwatches = new ArrayList<>();
    }

    // voeg apparaten toe
    public void voegSmartphoneToe(Smartphone smartphone){
        smartphones.add(smartphone);
    }

    public void voegSmartwatchToe(Smartwatch smartwatch) {
        smartwatches.add(smartwatch);
    }

    // sorteerapparaten
    public void sorteerSmartphonesOpMerk() {
        smartphones.sort(Comparator.comparing(Smartphone::getMerknaam));
    }

    public void sorteerSmartphonesOpPrijs() {
        smartphones.sort(Comparator.comparingDouble(Smartphone::getPrijs));
    }

    public void sorteerSmartwatchesOpMerk() {
        smartwatches.sort(Comparator.comparing(Smartwatch::getMerknaam));
    }
    public void sorteerSmartwatchesOpPrijs() {
        smartwatches.sort(Comparator.comparingDouble(Smartwatch::getPrijs));
    }

    // Getter
    public List<Smartphone> getSmartphones() {
        return smartphones;
    }
    public List<Smartwatch> getSmartwatches() {
        return smartwatches;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Smartphones:\n");
        for (Smartphone smartphone : smartphones) {
            sb.append(smartphone.toString()).append("\n");
        }
        sb.append("Smartwatches:\n");
        for (Smartwatch smartwatch : smartwatches) {
            sb.append(smartwatch.toString()).append("\n");
        }
        return sb.toString();
    }

    public static void main(String[] args){
       TestVerkoop testVerkoop = new TestVerkoop();

        testVerkoop.voegSmartphoneToe(new Smartphone(699.99, "Samsung", 1, SchermResolutie.xlarge));
        testVerkoop.voegSmartphoneToe(new Smartphone(499.99, "Apple", 2, SchermResolutie.large));
        testVerkoop.voegSmartphoneToe(new Smartphone(299.99, "OnePlus", 3, SchermResolutie.normal));

        testVerkoop.voegSmartwatchToe(new Smartwatch(199.99, "Google", 1, Vorm.ROND));
        testVerkoop.voegSmartwatchToe(new Smartwatch(149.99, "Apple", 2, Vorm.VIERKANT));

        testVerkoop.sorteerSmartphonesOpMerk();
        testVerkoop.sorteerSmartwatchesOpPrijs();

        System.out.println(testVerkoop);
    }
}
