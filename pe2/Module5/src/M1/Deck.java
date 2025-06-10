package M1;

public class Deck {
    private Kaart[][] kaarten;

    public Deck() {
        kaarten = new Kaart[4][13];
        for (Kleur kleur : Kleur.values()) {
            for (Waarde waarde : Waarde.values()) {
                int kleurindex = kleur.ordinal();
                int waardeindex = waarde.ordinal();
                kaarten[kleurindex][waardeindex] = new Kaart(waarde, kleur);
            }
        }
    }

    public Kaart[][] getKaarten() {
        return kaarten;
    }

    public Kaart getKaart(int kleurIndex, int waardeIndex) {
        return kaarten[kleurIndex][waardeIndex];
    }

    public static void main(String[] args) {
        Deck newDeck = new Deck();

        for (Kleur kleur : Kleur.values()){
            for (Waarde waarde : Waarde.values()) {
                int kleurindex = kleur.ordinal();
                int waardeindex = waarde.ordinal();
                System.out.println(newDeck.getKaart(kleurindex,waardeindex));
            }
        }
    }
}
