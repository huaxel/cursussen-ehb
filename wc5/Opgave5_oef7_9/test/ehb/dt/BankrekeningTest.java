package ehb.dt;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BankrekeningTest {
    private Bankrekening rekening;
    @BeforeEach
    void setUp() {
        rekening = new Bankrekening(1, 100);
    }
    @Test
    void testStort() {
        rekening.stort(200);
        assertEquals(300, rekening.getSaldo(), 0.001);
    }
    @Test
    void testHaalAf() {
        rekening.haalAf(50);
        assertEquals(50, rekening.getSaldo(), 0.001);
    }

    @Test
    void testHaalAfVeilig_Exception() {
        assertThrows(IllegalArgumentException.class, () -> {
            rekening.haalAfVeilig(200);
        });
    }
    @Test
    void testHaalAfVeilig_Succesvol() {
        rekening.haalAfVeilig(50);
        assertEquals(50, rekening.getSaldo(), 0.001);
    }

    @Test
    void testVoegSamen() {
        Bankrekening andereRekening = new Bankrekening(2, 150);
        rekening.voegSamen(andereRekening);
        assertEquals(250, rekening.getSaldo(), 0.001);
    }

    @Test
    void testVoegSamen_NullRekening() {
        assertThrows(IllegalArgumentException.class, () -> {
            rekening.voegSamen(null);
        });
    }
}