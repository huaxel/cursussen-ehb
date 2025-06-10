package M2School;

import java.util.Arrays;

public class Docent extends Personeelslid{
    private String specialisatie;
    private Student[] begeleiddeStudenten;

    public Docent(String voornaam, String achternaam, Lokaal lokaal, String specialisatie) {
        super(voornaam, achternaam, lokaal);
        this.specialisatie = specialisatie;
        this.begeleiddeStudenten = new Student[0];
    }

    public String getSpecialisatie() {
        return specialisatie;
    }

    public void setSpecialisatie(String specialisatie) {
        this.specialisatie = specialisatie;
    }

    public void begeleidStudent(Student... students){
        Student[] newStudents = new Student[begeleiddeStudenten.length + students.length];
        for (int i = 0; i < begeleiddeStudenten.length; i++){
            newStudents[i] = begeleiddeStudenten[i] ;
        }
        for (int i = 0; i < students.length; i++){
            newStudents[i+begeleiddeStudenten.length] = students[i] ;
        }
        begeleiddeStudenten = newStudents;
        newStudents = null;

    }
    public void removeStudent(Student student){
        int index = -1;
        for (int i = 0; i < begeleiddeStudenten.length; i++){
            if (begeleiddeStudenten[i] == student){
                index = i;
                break;
            }
        }
        if (index != -1){
            Student[] newStudents = new Student[begeleiddeStudenten.length -1];
            for (int i = 0; i < begeleiddeStudenten.length; i++){
                if (i < index){
                    begeleiddeStudenten[i] = newStudents[i];
                }
                if (i > index){
                    begeleiddeStudenten[i] = newStudents[i-1];
                }
            }
            begeleiddeStudenten = newStudents;
        }
    }

    @Override
    public String toString() {
        return "Docent{" +
                "specialisatie='" + specialisatie + '\'' +
                ", begeleiddeStudenten=" + Arrays.toString(begeleiddeStudenten) +
                "} " + super.toString();
    }
}
