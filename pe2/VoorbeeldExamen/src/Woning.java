public class Woning extends Eigendom{
    private WoningType type;

    public Woning(String huisnummer, int verbruik, WoningType type){
        super(huisnummer,verbruik);
        this.type = type;
    }

    public WoningType getType() {
        return type;
    }

    public void setType(WoningType type) {
        this.type = type;
    }

}
