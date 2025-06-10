package lesOvererving;

import java.time.LocalDate;

public class Student extends Person{
    private int studentennummer;

    public Student(LocalDate dateOfBirth, String name, int studentennummer) {
        super(dateOfBirth, name);
        this.studentennummer = studentennummer;
    }

    public int getStudentennummer() {
        return studentennummer;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentennummer=" + studentennummer +
                "} " + super.toString();
    }
}
