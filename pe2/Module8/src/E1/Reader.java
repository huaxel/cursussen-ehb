/*
Je gebruikt als input een CSV file die een
fictieve puntenlijst voorstelt.
Een csv file is een bestand waar je verschillende
waarden krijgt gescheiden op de komma.
De inhoud van het bestand kan er als volgt uitzien.

8, 12, 15, 7, 6, 18, 12, 13, 7, 12, 14, 19

Zorg voor een Reader object waarmee je de file inleest.
Wat je leest zal uiteindelijk een String zijn, probeer
deze af te drukken in je console om te zien of alles naar
behoren werkt.
 */
package E1;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Reader {
  public String readFile(String filePath) {
    StringBuilder wholeText = new StringBuilder();

    try (BufferedReader input = new BufferedReader(new FileReader(filePath))) {
      String currentLine;

      while ((currentLine = input.readLine()) != null) {
        wholeText.append(currentLine).append(System.lineSeparator());
      }
      System.out.println(wholeText);

    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    return wholeText.toString();
  }

  public static void main(String[] args) {
    Reader reader = new Reader();
    String fileContents = reader.readFile("Module8/src/E1/test.csv");
    System.out.println(fileContents);
  }
}
