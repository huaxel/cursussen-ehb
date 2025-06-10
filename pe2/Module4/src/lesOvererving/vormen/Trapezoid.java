package lesOvererving.vormen;

public class Trapezoid extends Vorm{
   private double smallBase, bigBase, height;

    public Trapezoid(double smallBase, double bigBase, double height) {
        this.smallBase = smallBase;
        this.bigBase = bigBase;
        this.height = height;
    }

    public Trapezoid(String kleur, double smallBase, double bigBase, double height) {
        super(kleur);
        this.smallBase = smallBase;
        this.bigBase = bigBase;
        this.height = height;
    }

    @Override
    public double berekenOppervlakte(){
        return (this.smallBase+this.bigBase)/2*this.height;
    }
}
