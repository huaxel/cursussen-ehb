document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    function kleurCascade() {
        document.body.style.backgroundColor = "red";
        console.log("Achtergrond is rood");

        setTimeout(() => {
            document.body.style.backgroundColor = "green";
            console.log("Achtergrond is groen");
            setTimeout(() => {
                document.body.style.backgroundColor = "blue";
                console.log("Achtergrond is blauw");

                setTimeout(() => {
                    document.body.style.backgroundColor = "";
                    console.log("cascade voltooid");
                }, 1000);
            }, 1000);
        }, 1000);
    }
    startButton.addEventListener("click", kleurCascade);
});
