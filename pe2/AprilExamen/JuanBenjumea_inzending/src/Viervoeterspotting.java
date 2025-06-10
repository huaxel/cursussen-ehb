public class Viervoeterspotting extends Spotting {
  private double hoogte;
  private double lengte;

  public Viervoeterspotting(String naam, double hoogte, double lengte) {
    super(naam);
    this.hoogte = hoogte;
    this.lengte = lengte;
  }

  public double getHoogte() {
    return hoogte;
  }

  public void setHoogte(double hoogte) {
    this.hoogte = hoogte;
  }

  public double getLengte() {
    return lengte;
  }

  public void setLengte(double lengte) {
    this.lengte = lengte;
  }

  @Override
  public String toString() {
    return "Viervoeterspotting{" +
            "hoogte=" + hoogte +
            ", lengte=" + lengte +
            "} " + super.toString();
  }
}
