package Challenge;

import java.time.LocalDate;

public abstract class Message {
    private final LocalDate postdatum;
    private LocalDate einddatum;
    private String inhoud;

    public Message(LocalDate postdatum, LocalDate einddatum, String inhoud) {
        this.postdatum = postdatum;
        this.einddatum = einddatum;
        this.inhoud = inhoud;
    }

    public LocalDate getPostdatum() {
        return postdatum;
    }

    public LocalDate getEinddatum() {
        return einddatum;
    }

    public void setEinddatum(LocalDate einddatum) {
        this.einddatum = einddatum;
    }

    public String getInhoud() {
        return inhoud;
    }

    public void setInhoud(String inhoud) {
        this.inhoud = inhoud;
    }

    @Override
    public String toString() {
        return "Message{" +
                "postdatum=" + postdatum +
                ", einddatum=" + einddatum +
                ", inhoud='" + inhoud + '\'' +
                '}';
    }
}
