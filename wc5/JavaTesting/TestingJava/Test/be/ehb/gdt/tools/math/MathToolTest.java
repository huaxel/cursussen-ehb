package be.ehb.gdt.tools.math;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MathToolTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }
    @Test
    public void TestMax(){
        int expected = 10;
        int actual = MathTool.berekenMax(10,5,2);
        assertEquals(expected, actual);
    }

    @Test
    public void TestMax123(){
        assertEquals(3,MathTool.berekenMax(1,2,3));
    }

    @Test
    public void TestMax321(){
        assertEquals(3,MathTool.berekenMax(3,2,1));
    }

    @Test
    public void TestGem345(){
        assertEquals(4,MathTool.berekenGem(3,4,5));
    }
    @Test
    public void TestGem273(){
        assertEquals(4,MathTool.berekenGem(2,7,3));
    }
    @Test
    public void TestGem477(){
        assertEquals(6,MathTool.berekenGem(4,7,2));
    }
}
