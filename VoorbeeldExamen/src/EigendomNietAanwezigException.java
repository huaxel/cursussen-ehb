public class EigendomNietAanwezigException extends RuntimeException {
  private static final String DEFAULT_MESSAGE = "Deze eigendom is niet aanwezig in de straat";
  public EigendomNietAanwezigException(String message) {
    super(message);
  }
  public EigendomNietAanwezigException(){
    super(DEFAULT_MESSAGE);
  }
}
