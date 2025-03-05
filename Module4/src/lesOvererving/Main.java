package lesOvererving;

import lesOvererving.vormen.Vorm;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Teacher firstTeacher = new Teacher(LocalDate.parse("1987-06-19"),"David van Steertegen",1);
        Student firstStudent = new Student(LocalDate.parse("2002-02-19"), "Tralala Tinnusn", 1);

        System.out.println(firstStudent);
    }
}
