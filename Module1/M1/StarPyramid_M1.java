package Module1.M1;

public class StarPyramid_M1 {
    public static void printPyramid(int height) {
        for (int i = 0; i <= height; i++) {
            for (int j = 0; j < i; j++) {
            System.out.print("*");}
        System.out.println();
        }
    }
    public static void main(String[] args) {
        printPyramid(5);
    }
}
