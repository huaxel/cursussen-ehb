package Module2.testJezelf;
import java.time.LocalDate;

public class Leverdatum_2_3 {
    public static void main(String[] args) {
        LocalDate besteldatum = LocalDate.now();
        LocalDate leverdatum = besteldatum.plusDays(4);
        System.out.println(leverdatum);
    }
}
