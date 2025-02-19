package Module2;

public class testArrays_E1 {
    public static void main(String[] args) {
        int[] elementen = new int[10];
        for (int i = 0; i < elementen.length; i++) {
            elementen[i] = 5;
            //System.out.println(elementen[i]);
        }
        elementen[1] = 23;
        for(int i = 0; i < elementen.length ; i++){
                System.out.println("element " + i + " = " + elementen[i]);
            }
        }}