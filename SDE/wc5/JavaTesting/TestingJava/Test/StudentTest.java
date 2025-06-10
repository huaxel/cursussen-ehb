import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StudentTest {
    private Student student;
    @BeforeEach
    void setUp() {
        student = new Student();
    }

    @AfterEach
    void tearDown() {
        student = null;
    }

    @Test
    void eenMethode() {
        boolean actual = student.eenMethode();
        boolean expected = false;
        assertEquals(expected, actual);
    }
}