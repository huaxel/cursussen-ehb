package ehb.dt;

import java.util.ArrayList;
import java.util.List;

public class Member {
    private String name;
    private List<Movie> borrowedMovies;

    public Member(String name) {
        this.name = name;
        this.borrowedMovies = new ArrayList<>();
    }

    public boolean borrowMovie(Movie movie) {
        if (!movie.isAvailable() || borrowedMovies.contains(movie)) {
            return false;
        }
        borrowedMovies.add(movie);
        movie.markAsBorrowed();
        return true;
    }

    public void returnMovie(Movie movie) {
        if (borrowedMovies.contains(movie)) {
            borrowedMovies.remove(movie);
            movie.markAsReturned();
        }
    }

    public String getName() {
        return name;
    }

    public List<Movie> getBorrowedMovies() {
        return borrowedMovies;
    }
}
