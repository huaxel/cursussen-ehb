package E1;

public enum Status {
    STARTED, PAUSED, STOPPED, UNREACHABLE;

    public void run(){
        System.out.println(this.name());
    }
}
