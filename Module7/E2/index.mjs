const users = [
    { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
    { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
    { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
    { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" },
];

document.getElementById("showUsers").addEventListener("click", () => {
    console.log("Alle gebruikers:");
    console.table(users);

    console.group("Gebruikersrollen");
    for (const user of users) {
        if (user.role === "Admin") {
            console.error(`${user.name} heeft Admin-rechten`);
        }
        if (user.role === "Editor") {
            console.warn(`${user.name} kan content bewerken`);
        }
        if (user.role === "User") {
            console.info(`${user.name} heeft standard gebruikersrechten`);
        }
    }

    console.group("Laatste inlog");
    const today = new Date();
    for (const user of users) {
        const lastLoginDate = new Date(user.lastLogin);

        console.log(
            `${user.name} heeft zich ${daysSinceLastLogin} dagen geleden ingelogd`
        );
    }
    console.groupEnd();
});
