package H1;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Factuur {
  private LocalDate factuurdatum;
  private List<Product> producten;

  public Factuur(LocalDate factuurdatum) {
    this.factuurdatum = factuurdatum;
    this.producten = new ArrayList<>();
  }

  public double berekenTotaal() {
    double totaal = 0.0;
    for (Product product : producten) {
      totaal += product.getPrijs();
    }
    return totaal;
  }

  public String genereerFactuur() {
    StringBuilder factuurOverzicht = new StringBuilder();
    factuurOverzicht.append("Factuuroverzicht: ").append(System.lineSeparator());
    factuurOverzicht.append(this.factuurdatum).append(System.lineSeparator());
    for (Product product : producten) {
      factuurOverzicht.append(product.getNaam()).append(System.lineSeparator());
    }
    factuurOverzicht.append("Totaal: ").append(this.berekenTotaal());

    return factuurOverzicht.toString();
  }

  public void schrijfFactuur(String filepath) {
    try (BufferedWriter writer = new BufferedWriter(new FileWriter(filepath))) {
      writer.write(this.genereerFactuur());
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public static void main(String[] args) {
    Product appel = new Product("appel",2.5);
    Product peer = new Product("peer",3.5);
    Product sap = new Product("sap", 6.5);

    Factuur factuur = new Factuur(LocalDate.now());
    factuur.producten.add(appel);
    factuur.producten.add(peer);
    factuur.producten.add(sap);

    factuur.schrijfFactuur("Module8/src/H1/factuur.txt");

  }
}
