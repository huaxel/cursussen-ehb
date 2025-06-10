const mainMenu = document.getElementById("mainMenu");
const headings = document.querySelectorAll("h1, h2");

let currentH1 = null;

// Menu op basis van h1 en h2
headings.forEach((heading) => {
  const menuItem = document.createElement("li");

  if (heading.tagName === "H1") {
    menuItem.textContent = heading.textContent;
    mainMenu.appendChild(menuItem);
    currentH1 = menuItem;

    const subMenu = document.createElement("ul");
    menuItem.appendChild(subMenu);

    menuItem.addEventListener("click", (event) => {
        event.preventDefault();
        heading.scrollIntoView({ behavior: "smooth" });
        toggleSubMenu(menuItem);
      });
      
  } else if (heading.tagName === "H2" && currentH1) {
    const subMenuItem = document.createElement("li");
    subMenuItem.textContent = heading.textContent;
    currentH1.querySelector("ul").appendChild(subMenuItem);

    subMenuItem.addEventListener("click", (event) => {
        event.stopPropagation(); 
        heading.scrollIntoView({ behavior: "smooth" });
      });
  }
});

function toggleSubMenu(menuItem) {
  const subMenu = menuItem.querySelector("ul");
  if (subMenu) {
    subMenu.classList.toggle("show");
  }
}

window.addEventListener("scroll", () => {
  headings.forEach((heading) => {
    const rect = heading.getBoundingClientRect();
    const menuItems = document.querySelectorAll("#mainMenu li");
    menuItems.forEach((item) => {
      if (item.textContent === heading.textContent) {
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    });
  });
});