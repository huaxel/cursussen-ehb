package M2School;

public class Student extends Persoon{
    private int studentenNummer;
    private String specialisatie;

    public Student(String voornaam, String achternaam, int studentenNummer, String specialisatie) {
        super(voornaam, achternaam);
        this.studentenNummer = studentenNummer;
        this.specialisatie = specialisatie;
    }

    public int getStudentenNummer() {
        return studentenNummer;
    }

    public void setStudentenNummer(int studentenNummer) {
        this.studentenNummer = studentenNummer;
    }

    public String getSpecialisatie() {
        return specialisatie;
    }

    public void setSpecialisatie(String specialisatie) {
        this.specialisatie = specialisatie;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentenNummer=" + studentenNummer +
                ", specialisatie='" + specialisatie + '\'' +
                "} " + super.toString();
    }
}
