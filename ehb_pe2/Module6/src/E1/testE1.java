package E1;

public class testE1 {
  public static void main(String[] args) {
    Werknemer Juan = new Werknemer("Juan Benjumea");
    boolean add1 = Juan.addSkill("Data Analyse");
    boolean add2 = Juan.addSkill("Duits");
    boolean add3 = Juan.addSkill("Ping Pong");
    boolean add4 = Juan.addSkill("Duits");
    boolean remove1 = Juan.removeSkill("Ping Pong");
    System.out.println(add1);
    System.out.println(add2);
    System.out.println(add3);
    System.out.println(add4);
    System.out.println(remove1);
    Juan.getSkills();
  }
}
