import java.io.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Park implements Serializable {
  private int postcode;
  private String naam;
  private List<Spotting> spottingsList;

  public Park(int postcode, String naam) {
    this.postcode = postcode;
    this.naam = naam;
    this.spottingsList = new ArrayList<>();
  }

  public void addSpotting(Spotting spotting) {
    spottingsList.add(spotting);
  }



  public LocalDateTime geefDatumSpotting(Spotting dier) {
    for (Spotting spotting : spottingsList) {
      try {
        if (spottingsList.contains(dier)) {
          return spotting.getMoment();
        } else throw new DierNietGespotException();

      } catch (DierNietGespotException e) {
        System.out.println(e.getMessage());
      }
    }
    return null;
  }

  public void bewaarPark(String filenaam) {

    try (FileOutputStream fos = new FileOutputStream(filenaam);
         ObjectOutputStream oos = new ObjectOutputStream(fos)) {
      StringBuilder sb = new StringBuilder();
      sb.append(this.postcode).append(System.lineSeparator());
      sb.append(this.naam).append(System.lineSeparator());
      for (Spotting spotting : spottingsList){
        sb.append(spotting.getNaam()).append(System.lineSeparator());
        sb.append(spotting.getMoment()).append(System.lineSeparator());
      }
      String output = sb.toString();
      oos.writeObject(output);
      /*     oos.writeObject(this);*/

    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
