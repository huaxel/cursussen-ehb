package E1;

public class Test {
    public static void main(String[] args) {
        for (Status state : Status.values()){
            state.run();
        }
    }
}
