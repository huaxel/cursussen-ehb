package ehb.dt;

public class Bankrekening
{
    private int rekeningnummer;
    private double saldo;
    public Bankrekening(int nr, double startBedrag) {
        rekeningnummer = nr;
        saldo = startBedrag;
    }
    public double getSaldo(){
        return saldo;
    }
    public void stort(double bedrag){
        saldo += bedrag;
    }

    public void haalAf(double bedrag) {
        saldo -= bedrag;
    }
    // Nieuwe methode 1: haalAfVeilig
    public void haalAfVeilig(double bedrag) {
        if (bedrag > saldo) {
            throw new IllegalArgumentException("Saldo ontoereikend om bedrag af te halen");
        }
        saldo -= bedrag;
    }

    // Nieuwe methode 2: voegSamen
    public void voegSamen(Bankrekening ander) {
        if (ander == null) {
            throw new IllegalArgumentException("Kan geen saldo samenvoegen met een niet-bestaande rekening");
        }
        this.saldo += ander.getSaldo();
    }
}