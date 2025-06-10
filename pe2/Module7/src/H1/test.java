package H1;

public class test {
    public static void main(String[] args){
        UniverseleRekening test = new UniverseleRekening();
        test.toevoegenVolmacht("Jan");
        test.geldStorten(4,"Jan");
        test.geldAfhalen(2,"Dirk");
    }
}