"use strict";

const themaKnop = document.getElementById("themaKnop");
let isDarkTheme = false;

themaKnop.addEventListener("click", () => {
  if (isDarkTheme) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelectorAll("a").forEach((link) => {
      link.style.color = "blue";
    });
    themaKnop.textContent = "Donker thema";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelectorAll("a").forEach((link) => {
      link.style.color = "lightblue";
    });
    themaKnop.textContent = "Licht thema";
  }
  isDarkTheme = !isDarkTheme;
});
