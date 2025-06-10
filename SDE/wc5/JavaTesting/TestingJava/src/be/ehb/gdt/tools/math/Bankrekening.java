package be.ehb.gdt.tools.math;

public class Bankrekening {
    private int rekeningnummer;
    private double saldo;

    public Bankrekening(int nr, double startBedrag) {
        rekeningnummer = nr;
        saldo = startBedrag;
    }

    public double getSaldo() {
        return saldo;
    }

    public void stort(double bedrag) {
        saldo += bedrag;
    }

    public void haalAf(double bedrag) {
        saldo -= bedrag;
    }
    public void haalAfVeilig(double bedrag) throws Exception {
        if (saldo - bedrag < 0) {
            throw new Exception("Onvoldoende saldo");
        } else {
            saldo -= bedrag;
        }
    }
    public void voegSamen(Bankrekening ander){
        this.saldo += ander.saldo;
        ander.saldo = 0;
    }
}
