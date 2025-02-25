import java.util.Scanner;
public class test {
    public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                // Read the integer
                int age = sc.nextInt();

                if (age <= 12){
                    System.out.println("Child");// Write your code here to determine the life stage based on the input age
                } else if (age <= 17){
                    System.out.println("Teenager");
                } else if (age <= 59){
                    System.out.println("Adult");
                } else {
                    System.out.println("Senior citizen");
                }
                // You should use if...else if...else statement
                // Then, print out the appropriate message

                sc.close();
            }
        }
