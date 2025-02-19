package Module2;

import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.util.Locale;

public class AfsprakenKalender_H1 {
    public static void main(String[] args) {
        LocalDate[] dokterAfspraken = new LocalDate[5];
        dokterAfspraken[0] = LocalDate.now();

        for(int i = 1; i < dokterAfspraken.length;i++){
            dokterAfspraken[i] = dokterAfspraken[i-1].plusDays(15);
        }

        // mooiere formatting van data
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE d MMMM yyyy", new Locale("nl", "BE"));

        System.out.println("Dit zijn jouw dokterafspraken:");
        for(LocalDate afspraak : dokterAfspraken){
            String formattedDate = afspraak.format(formatter);
            //formattedDate = capitalize(formattedDate);
            System.out.println(formattedDate);
        }
    }
    /*
    private static String capitalize(String input){
        String[] words = input.split(" ");
        StringBuilder capitalizedString = new StringBuilder();

        for (String word : words){
            if (word.length() > 1){
                capitalizedString.append(Character.toUpperCase(word.charAt(0)))
                        .append(word.substring(1)).append(" ");
            } else {
                capitalizedString.append(word.toUpperCase()).append(" ");
            }
        }
        return capitalizedString.toString().trim();

    }
    */
}
