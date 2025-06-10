package ehb.personalLibrary;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LibraryTest {
  private Library library;
  private Book book1;
  private Book book2;
  private Book book3;
  private Book book4;
  private Book book5;
  private Person person;

  @BeforeEach
  public void setUp() {
    library = new Library();
    book1 = new Book("A Clockwork Orange", "Anthony Burgess");
    person = new Person("John Doe");

    library.addBook(book1);
    library.addPatron(person);
  }

  public void addMoreBooks() {
    book2 = new Book("Anna Karenina", "Lev Tolstoy");
    book3 = new Book("Crime and Punishment", "Vladimir Dostoevsky");
    book4 = new Book("1984", "George Orwell");
    book5 = new Book("Brave New World", "Aldous Huxley");
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);
    library.addBook(book5);
  }

  @Test
  void boekLenenRosy() {
    assertEquals(book1, person.checkoutBook(book1), "null result");
    assertFalse(book1.isAvailable(), "book still available");
  }

  @Test
  void boekLenenTweemaal() {
    person.checkoutBook(book1);
    assertNull(person.checkoutBook(book1));
  }

  @Test
  void boekOnbestaandeBoek(){
    Book notAddedBook = new Book("Homo Deus", "Yuval Noah Harari");
    assertNull(person.checkoutBook(notAddedBook));
  }

  @Test
  void testDefaultMaxBooksRosy() {
    addMoreBooks();
    assertEquals(3, person.getMaxBooks(), "wrong max books");
    assertEquals(book1, person.checkoutBook(book1), "probleem uitlenen van boek 1");
    assertEquals(book2, person.checkoutBook(book2), "probleem uitlenen van boek 2");
    assertEquals(book3, person.checkoutBook(book3), "probleem uitlenen van boek 3");
  }

  @Test
  void testDefaultMaxBooksNonRosy() {
    addMoreBooks();
    assertEquals(3, person.getMaxBooks(), "wrong max books");
    assertEquals(book1, person.checkoutBook(book1), "probleem uitlenen van boek 1");
    assertEquals(book2, person.checkoutBook(book2), "probleem uitlenen van boek 2");
    assertEquals(book3, person.checkoutBook(book3), "probleem uitlenen van boek 3");
    assertNull(person.checkoutBook(book4), "null result");
  }

  @Test
  void testCustomMaxBooksRosy() {
    addMoreBooks();
    person.setMaxBooks(4);
    assertEquals(4, person.getMaxBooks(), "wrong setup custom max books");
    assertEquals(book1, person.checkoutBook(book1), "probleem uitlenen van boek 1");
    assertEquals(book2, person.checkoutBook(book2), "probleem uitlenen van boek 2");
    assertEquals(book3, person.checkoutBook(book3), "probleem uitlenen van boek 3");
    assertEquals(book4, person.checkoutBook(book4), "probleem uitlenen van boek 4");
  }

  @Test
  void testCustomMaxBooksNonRosy() {
    addMoreBooks();
    person.setMaxBooks(4);
    assertEquals(4, person.getMaxBooks(), "wrong setup custom max books");
    assertEquals(book1, person.checkoutBook(book1), "probleem uitlenen van boek 1");
    assertEquals(book2, person.checkoutBook(book2), "probleem uitlenen van boek 2");
    assertEquals(book3, person.checkoutBook(book3), "probleem uitlenen van boek 3");
    assertEquals(book4, person.checkoutBook(book4), "probleem uitlenen van boek 4");
    assertNull(person.checkoutBook(book5), "adding fifth book should return null");
  }
  @Test
  void testPatronPrint(){
    person.checkoutBook(book1);
    assertEquals("John Doe (1 out of 3 books)", person.toString());
  }
  @Test
  void testListBooksPatron(){
    addMoreBooks();
    person.checkoutBook(book1);
    person.checkoutBook(book2);
    assertEquals(2, person.getBooks().size());
    assertTrue(person.getBooks().contains(book1));
    assertTrue(person.getBooks().contains(book2));
  }
  @Test
  void testAddingDuplicateBookToLibrary(){
    book2 = new Book("test","test");
    assertFalse(library.getBooks().contains(book2));
    library.addBook(book2);
    assertFalse(library.addBook(book2));
  }
  @Test
  void testAddingPatron(){
    Person personX = new Person("John Doe");
    assertFalse(library.getPatrons().contains(personX));
    assertTrue(library.addPatron(personX));
    assertTrue(library.getPatrons().contains(personX));
  }
  @Test
  void testAddingDuplicatePatron(){
    Person personX = new Person("John Doe");
    assertFalse(library.getPatrons().contains(personX));
    assertTrue(library.addPatron(personX));
    assertFalse(library.addPatron(personX));
  }

  @Test
  void testRemoveBook(){
    assertTrue(library.getBooks().contains(book1));
    assertTrue(library.removeBook(book1));
    assertFalse(library.getBooks().contains(book1));
  }
  @Test
  void testRemoveNotExistingBook(){
    book2 = new Book("test","test");
    assertFalse(library.getBooks().contains(book2));
    int nrOfBooks = library.getBooks().size();
    assertFalse(library.removeBook(book2));
    assertEquals(nrOfBooks, library.getBooks().size());
  }

  @Test
  void testRemovePatron(){
    assertTrue(library.getPatrons().contains(person));
    assertTrue(library.removePatron(person));
    assertFalse(library.getPatrons().contains(person));
  }
  @Test
  void testRemoveNotExistingPatron(){
    Person person2 = new Person("test");
    assertFalse(library.getPatrons().contains(person2));
    int nrOfPatrons = library.getPatrons().size();
    assertEquals(nrOfPatrons, library.getPatrons().size());
  }

  @Test
  void testAvailabilityWhenPatronBorrowsBook(){
    assertTrue(library.isBookAvailable(book1));
    person.checkoutBook(book1);
    assertFalse(library.isBookAvailable(book1));
  }
  @Test
  void testAvailabilityWhenPatronBorrowsAndReturnsBook(){
    assertTrue(library.isBookAvailable(book1));
    person.checkoutBook(book1);
    assertFalse(library.isBookAvailable(book1));
    person.checkinBook(book1);
    assertTrue(library.isBookAvailable(book1));
  }
  @Test
  void testAvailableBooksList(){
    book2 = new Book("test","test");
    int nrOfBooks = library.returnAvailableBooks().size();
    library.addBook(book2);
    assertEquals(nrOfBooks+1, library.returnAvailableBooks().size());
  }
}
