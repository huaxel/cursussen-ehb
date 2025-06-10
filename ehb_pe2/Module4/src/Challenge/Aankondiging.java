package Challenge;

import java.time.LocalDate;

public class Aankondiging extends Message{
    public Aankondiging(LocalDate postdatum, LocalDate einddatum, String inhoud) {
        super(postdatum, einddatum, inhoud);
    }

    @Override
    public String toString() {
        return "Aankondiging{} " + super.toString();
    }
}
