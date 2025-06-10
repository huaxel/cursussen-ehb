package H1;

public enum SchermResolutie {

    xlarge("960dp x 720dp"),
    large("640dp x 480dp"),
    normal("470dp x 320dp"),
    small("426dp x 320dp");

    private String resolutie;

    SchermResolutie(String resolutie){
        this.resolutie = resolutie;
    }
    public String getResolutie(){
        return resolutie;
    }
}
