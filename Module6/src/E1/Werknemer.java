package E1;

import java.util.TreeSet;

public class Werknemer {
  private String naam;
  private TreeSet<String> skills = new TreeSet<>();

  public Werknemer(String naam) {
    this.naam = naam;
    this.skills = new TreeSet<>();
  }

  public boolean addSkill(String skill) {
    return skills.add(skill);
  }

  public boolean removeSkill(String skill) {
    return skills.remove(skill);
  }

  public TreeSet<String> getSkills() {
    System.out.println(skills);
    return skills;
  }

  public String getNaam() {
    return naam;
  }
}
