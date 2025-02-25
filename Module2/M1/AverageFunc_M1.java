package Module2.M1;

import java.util.Scanner;

public class AverageFunc_M1 {
    public static void main(String[] args) {
        int[] numberArray = new int[5];
        Scanner in = new Scanner(System.in);

        System.out.println("Voer 5 getallen in:");

        for (int i=0; i < 5; i++){
            numberArray[i] = in.nextInt();
        }
        in.close();

        // numberArray = new int[]{1,2,3,4,5};
        int som = 0;
        for(int num :numberArray) {
            som += num;
        }
        float average = (float) som/numberArray.length ;
        System.out.println("Het gemiddelde is: " + average);
    }

    }