const specialElements = document.querySelectorAll(".special");

specialElements.forEach(element => {
    element.style.color = "red";
});

const secondParagraph = document.getElementsByTagName('p')[1];
secondParagraph.style.textDecoration = 'underline';

const outputDiv = document.getElementById("output");
outputDiv.textContent = `Het aantal speciale elementen is ${specialElements.length}`;