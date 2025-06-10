package lesOvererving;

import java.time.LocalDate;

public class Teacher extends Person{
    private int personeelsnummer;

    public Teacher(LocalDate dateOfBirth, String name, int personeelsnummer) {
        super(dateOfBirth, name);
        this.personeelsnummer = personeelsnummer;
    }
}
