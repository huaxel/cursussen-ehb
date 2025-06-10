public class DierNietGespotException extends RuntimeException {
  private static final String DEFAULT_MESSAGE = "De door u aangegeven dier werd nog niet gespot";

  public DierNietGespotException(String message) {
    super(message);
  }

  public DierNietGespotException() {
    super(DEFAULT_MESSAGE);
  }
}
