package M1;

public enum Waarde {
  AAS(14),
  TWEE(2),
  DRIE(3),
  VIER(4),
  VIJF(5),
  ZES (6),
  ZEVEN(7),
  ACHT(8),
  NEGEN(9),
  TIEN(10),
  BOER(11),
  DAME(12),
  HEER(13);

  private int numeriekeWaarde;

  private Waarde(int numeriekeWaarde) {
    this.numeriekeWaarde = numeriekeWaarde;
  }

  public int getNumeriekeWaarde() {
        return numeriekeWaarde;
    }
}