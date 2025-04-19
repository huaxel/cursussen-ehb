/*
Maak een klasse Artikel. Elk artikel heeft een publicatiedatum, titel, auteur en inhoud.
Voorzie binnen de klasse het nodige zoals constructors, getters en setters.
Deze gaan later over een Stream moeten worden doorgestuurd dus je moet hier
ook nog de juiste interface (wink, wink, nudge nudge) aan meegeven.

Voorzie twee methoden binnen je main klasse om dit te kunnen testen:
een methode om het artikel weg te schrijven naar een bestand en een methode
om een artikel in te lezen. Geef de methode als parameter een String mee
met de naam van het bestand.
*/
package M1;

import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Artikel implements Serializable {
  LocalDate publicatiedatum;
  String titel;
  String auteur;
  String inhoud;

  public Artikel(LocalDate publicatiedatum, String titel, String auteur, String inhoud) {
    this.publicatiedatum = publicatiedatum;
    this.titel = titel;
    this.auteur = auteur;
    this.inhoud = inhoud;
  }

  public LocalDate getPublicatiedatum() {
    return publicatiedatum;
  }

  public void setPublicatiedatum(LocalDate publicatiedatum) {
    this.publicatiedatum = publicatiedatum;
  }

  public String getTitel() {
    return titel;
  }

  public void setTitel(String titel) {
    this.titel = titel;
  }

  public String getAuteur() {
    return auteur;
  }

  public void setAuteur(String auteur) {
    this.auteur = auteur;
  }

  public String getInhoud() {
    return inhoud;
  }

  public void setInhoud(String inhoud) {
    this.inhoud = inhoud;
  }

  public void artikelSchrijven(String filepath) {
    StringBuilder inhoud = new StringBuilder();
    inhoud.append(this.titel).append(System.lineSeparator());
    inhoud.append(this.auteur).append(System.lineSeparator());
    inhoud.append(this.publicatiedatum).append(System.lineSeparator());
    inhoud.append(this.inhoud);

    String inhoudString = inhoud.toString();

    try (BufferedWriter writer = new BufferedWriter(new FileWriter(filepath))) {
      writer.write(inhoudString);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public static Artikel artikelInlezen(String filepath) throws IOException {
    String line;
    String[] lines = new String[4];

    int lineCount = 0;

    try (BufferedReader br = new BufferedReader(new FileReader(filepath))) {
      while ((line = br.readLine()) != null && lineCount < 4) {
        lines[lineCount++] = line;
      }
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    if (lineCount < 4) {
      throw new IOException("Not enough data to create article.");
    }
    LocalDate publicatiedatum = LocalDate.parse(lines[2], DateTimeFormatter.ISO_LOCAL_DATE);
    return new Artikel(publicatiedatum, lines[0], lines[1], lines[2]);
  }

  public static void main(String[] args) {
    Artikel test = new Artikel(LocalDate.now(), "Mijn Boek", "ikke", "blabla");
    test.artikelSchrijven("Module8/src/M1/artikel.txt");

    try {
      Artikel readArtikel = Artikel.artikelInlezen("Module8/src/M1/artikel.txt");
      System.out.println("Artikel successfully read:");
      System.out.println("Titel: " + readArtikel.getTitel());
      System.out.println("Auteur: " + readArtikel.getAuteur());
      System.out.println("Publicatiedatum: " + readArtikel.getPublicatiedatum());
      System.out.println("Inhoud: " + readArtikel.getInhoud());
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }
}
