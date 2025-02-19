package Module2;

public class testStrings_E2 {
    public static void main(String[] args) {
        String eerste = "the quick brown fox";
        String tweede = "Jumps over the lazy dog";
        String samen = eerste + " " + tweede;
        String nieuw = samen.replace("fox","cat");
        System.out.println(nieuw);
    }
}