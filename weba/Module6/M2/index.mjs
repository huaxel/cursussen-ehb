document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
    const toepassenKnop = document.getElementById("toepassen");

    function getPosts(zoekterm, sorteerOptie, limit) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                // Filter op zoekterm
                let filteredPosts = posts.filter((post) =>
                    post.title.toLowerCase().includes(zoekterm)
                );

                // Sorteer op basis van de geselecteerde optie
                switch (sorteerOptie) {
                    case "titel-oplopend":
                        filteredPosts.sort((a, b) =>
                            a.title.localeCompare(b.title)
                        );
                        break;
                    case "titel-aflopend":
                        filteredPosts.sort((a, b) =>
                            b.title.localeCompare(a.title)
                        );
                        break;
                    case "id-oplopend":
                        filteredPosts.sort((a, b) => a.id - b.id);
                        break;
                    case "id-aflopend":
                        filteredPosts.sort((a, b) => b.id - a.id);
                        break;
                }

                // Beperk het aantal posts
                return filteredPosts.slice(0, limit);
            });
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = "";

        if (posts.length === 0) {
            const noResultsMessage = document.createElement("div");
            noResultsMessage.classList.add("geen-resultaten");
            noResultsMessage.textContent = "Geen posts gevonden.";
            postsContainer.appendChild(noResultsMessage);
            return;
        }

        posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            const postTitleElement = document.createElement("div");
            postTitleElement.classList.add("post-titel");
            postTitleElement.textContent = post.title.toUpperCase();

            const postBodyElement = document.createElement("div");
            postBodyElement.classList.add("post-body");
            postBodyElement.textContent =
                post.body.slice(0, 100) + (post.body.length > 100 ? "..." : "");

            const postInfoElement = document.createElement("div");
            postInfoElement.classList.add("post-info");
            postInfoElement.textContent = `ID: ${post.id} | Gebruiker: ${post.userId}`;

            postElement.appendChild(postTitleElement);
            postElement.appendChild(postBodyElement);
            postElement.appendChild(postInfoElement);

            postsContainer.appendChild(postElement);
        });
    }

    // Voeg event listener toe aan de "Toepassen"-knop
    toepassenKnop.addEventListener("click", () => {
        const zoekterm = document.getElementById("zoekterm").value.toLowerCase();
        const sorteerOptie = document.getElementById("sorteer").value;
        const limit = parseInt(document.getElementById("limiet").value, 10);

        getPosts(zoekterm, sorteerOptie, limit)
            .then(renderPosts)
            .catch((error) => {
                console.error("Fout bij het ophalen van posts:", error);
                postsContainer.innerHTML =
                    '<div class="geen-resultaten">Er is een fout opgetreden bij het ophalen van de posts.</div>';
            });
    });
});