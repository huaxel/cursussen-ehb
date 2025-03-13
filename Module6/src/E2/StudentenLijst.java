package E2;

import java.util.ArrayList;
import java.util.Collections;

public class StudentenLijst {
  private int klasId;
  private ArrayList<String> studenten;

  public StudentenLijst(int klasId) {
    this.klasId = klasId;
    this.studenten = new ArrayList<>();
  }

  public boolean addStudent(String student) {
    return studenten.add(student);
  }

  public boolean removeStudent(String student) {
    return studenten.remove(student);
  }

  public void shuffle() {
    Collections.shuffle(studenten);
  }

  public int getKlasId() {
    return klasId;
  }

  public ArrayList<String> getStudenten() {
    return studenten;
  }

    @Override
    public String toString() {
        return "StudentenLijst{" +
                "klasId=" + klasId +
                ", studenten=" + studenten +
                '}';
    }

    public static void main(String[] args) {
    StudentenLijst test = new StudentenLijst(23);
    test.addStudent("Jan");
    test.addStudent("Marie");
    test.addStudent("Abbi");

    System.out.println(test);
    test.shuffle();
    System.out.println(test);
  }
}
