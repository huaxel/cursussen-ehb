package ehb.sde.opgave5;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MathToolTest {

    @Test
    public void testBerekenMax_MetDrieVerschillendeGetallen() {
        int resultaat = MathTool.berekenMax(5, 8, 3);
        assertEquals(8, resultaat);
    }

    @Test
    public void testBerekenMax_MetGelijkeGetallen() {
        int resultaat = MathTool.berekenMax(4, 4, 4);
        assertEquals(4, resultaat);
    }

    @Test
    public void testBerekenMax_MetNegatieveGetallen() {
        int resultaat = MathTool.berekenMax(-10, -3, -7);
        assertEquals(-3, resultaat);
    }

    @Test
    public void testBerekenMax_MetTweeGelijkeMaxima() {
        int resultaat = MathTool.berekenMax(6, 6, 2);
        assertEquals(6, resultaat);
    }

    @Test
    void testBerekenGem() {
        float expected = 5.5f;
        float actual = MathTool.berekenGem(4.0f, 7.0f);
        assertEquals(expected, actual, 0.001f);
    }

    @Test
    void testBerekenGem_PositiveValues() {
        float expected = 5.5f;
        float actual = MathTool.berekenGem(4.0f, 7.0f);
        assertEquals(expected, actual, 0.001f);
    }

    @Test
    void testBerekenGem_NegativeValues() {
        float expected = -3.0f;
        float actual = MathTool.berekenGem(-2.0f, -4.0f);
        assertEquals(expected, actual, 0.001f);
    }

    @Test
    void testBerekenGem_WithZero() {
        float expected = 2.5f;
        float actual = MathTool.berekenGem(0.0f, 5.0f);
        assertEquals(expected, actual, 0.001f);
    }

    @Test
    void testBerekenGem_SameValues() {
        float expected = 3.0f;
        float actual = MathTool.berekenGem(3.0f, 3.0f);
        assertEquals(expected, actual, 0.001f);
    }

}
