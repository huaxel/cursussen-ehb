package Module1;

import java.util.Scanner;

public class CommonDenominator_H1 {
    public static int getGCD(int n1, int n2) {
        // calculator function
        while (n2 != 0) {
            int temp = n2;
            n2 = n1%n2;
            n1 = temp;
            }
        return n1;
    }
    public static void main(String[] args) {
        // ask user for two numbers
        Scanner scanner = new Scanner(System.in);
        System.out.print("Geef het eerste nummer: ");
        int n1 = scanner.nextInt();
        System.out.print("Geef het tweede nummer: ");
        int n2 = scanner.nextInt();

        // call function
        int gcd = getGCD(n1,n2);

        // print result
        System.out.println("Het grootste gemene deler is: " + gcd);
    }
    }
