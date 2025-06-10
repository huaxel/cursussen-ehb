document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeToggle");
    const body = document.body;

    function toggleTheme() {
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            themeButton.textContent = "Switch to Light Theme";
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.replace("dark-theme", "light-theme");
            themeButton.textContent = "Switch to Dark Theme";
            localStorage.setItem("theme", "light-theme");
        }
    }

    themeButton.addEventListener("click", toggleTheme);
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            body.className = savedTheme;
            themeButton.textContent =
                savedTheme === "dark-theme"
                    ? "Switch to Light Theme"
                    : "Switch to Dark Theme";
        }
    }
    loadTheme();
});
