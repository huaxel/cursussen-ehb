package ehb.dt;

public class Movie {
    private String title;
    private boolean isAvailable;

    public Movie(String title) {
        this.title = title;
        this.isAvailable = true;
    }

    public String getTitle() {
        return title;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void markAsBorrowed() {
        isAvailable = false;
    }

    public void markAsReturned() {
        isAvailable = true;
    }
}