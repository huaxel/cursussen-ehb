package be.ehb.gdt.tools.math;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BankrekeningTest {

    Bankrekening bankrekening;
    @BeforeEach
    void setUp() {
        bankrekening = new Bankrekening(1, 100);
    }
    @Test
    void getSaldo() {
        assertEquals(100, bankrekening.getSaldo());
    }

    @Test
    void testStort() {
        bankrekening.stort(100);
        assertEquals(200, bankrekening.getSaldo());
    }

    @Test
    void testHaalAf() {
        bankrekening.haalAf(100);
        assertEquals(0, bankrekening.getSaldo());
    }

    @Test
    void testHaalAfVeilig() {
        assertThrows(Exception.class, () -> bankrekening.haalAfVeilig(100));
    }

    @Test
    void testVoegSamen() {
        Bankrekening ander = new Bankrekening(2, 100);
        bankrekening.voegSamen(ander);
        assertEquals(200, bankrekening.getSaldo());
    }
    @Test
    void testVoegSamen_Nullrekening() {
        assertThrows(NullPointerException.class, () -> bankrekening.voegSamen(null));
    }
}