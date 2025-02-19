package Module2;

public class Average_2_2 {
    public static void main(String[] args) {
        int[] studentenScores = {12, 8, 13, 18, 15, 6, 12};
        int grootte = studentenScores.length;
        int som = 0;
        for(int i = 0; i < grootte ; i++) {
            som += studentenScores[i];
        };
        float average = (float) som/grootte ;
        System.out.println("De gemiddelde score is: " + average);
    }
}