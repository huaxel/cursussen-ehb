package ehb.dt;

import java.util.ArrayList;
import java.util.List;

public class VideoStore {
    private List<Movie> collection;

    public VideoStore() {
        collection = new ArrayList<>();
    }

    public void addMovie(Movie movie) {
        collection.add(movie);
    }

    public boolean hasMovie(Movie movie) {
        return collection.contains(movie);
    }
}
