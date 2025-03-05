package Challenge;

import java.time.LocalDate;

public class Evenement extends Message{
    private String location;

    public Evenement(LocalDate postdatum, LocalDate einddatum, String inhoud, String location) {
        super(postdatum, einddatum, inhoud);
        this.location = location;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Evenement{" +
                "location='" + location + '\'' +
                "} " + super.toString();
    }
}
