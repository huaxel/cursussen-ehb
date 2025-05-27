package ehb.dt;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class VideoStoreTestAanvullen {
    private VideoStore store;
    private Movie movie1;
    private Member member;

    @BeforeEach
    public void setUp() throws Exception {
        store = new VideoStore();
        movie1 = new Movie("Inception");
        member = new Member("Tom");
        store.addMovie(movie1);
    }

    @Test
    public void testMemberBorrowMovieTom() {
        assertTrue(member.borrowMovie(movie1));
    }

    @Test
    public void testMemberBorrowSameMovieTwice() {
        member.borrowMovie(movie1);
        assertFalse(member.borrowMovie(movie1));
    }

    @Test
    public void testMemberBorrowMovieNotInCollection() {
        Movie notAddedMovie = new Movie("Unknown Movie");
        assertFalse(member.borrowMovie(notAddedMovie));
        // borrowMovie checkt niet of movie in collection van videostore zit
    }

    @Test
    public void testAddingMovieToVideoStore() {
        Movie movie2 = new Movie("The Matrix");
        store.addMovie(movie2);
        assertTrue(store.hasMovie(movie2));
    }

}
