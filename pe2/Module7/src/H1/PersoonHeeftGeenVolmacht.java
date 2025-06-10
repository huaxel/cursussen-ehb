package H1;

public class PersoonHeeftGeenVolmacht extends Exception{
    private static final String DEFAULT_MESSAGE = "Deze persoon heeft geen volmacht bij deze rekening";
    PersoonHeeftGeenVolmacht(String message){
        super(message);
    }
    PersoonHeeftGeenVolmacht(){
        super(DEFAULT_MESSAGE);
    }
}
