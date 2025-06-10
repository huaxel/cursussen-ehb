// initialisatie
let score = 0
let naam = prompt('Hoe heet je?');
console.log(`Welkom bij de quiz, ${naam}!`);

// eerste vraag
let vraag1 = prompt("Wat is de output van de rekensom A+2?");
if (vraag1 == "A2"){
    alert(`Correct, één punt voor ${naam}`);
    score++;
} else {
    alert("Dat is helaas incorrect. Het juiste antwoord is A2");
}

// tweede vraag
let vraag2 = prompt("Hoe kan je een variabele opstarten in Javascript?");
if (vraag2 == "let" || vraag2 == "var" || vraag2 == "const"){
    alert(`Correct, één punt voor ${naam}`);
    score++;
} else {
    alert("Dat is helaas incorrect. De juiste antwoorden zijn let, var en const");
}

// derde vraag
let vraag3 = prompt("Met welke tag kan je Javascript code insluiten binnen een HTML-bestand?");
if (vraag3.toLowerCase().includes("script")){
    alert(`Correct, één punt voor ${naam}`);
    score++;
} else {
    alert("Dat is helaas incorrect. Het juiste antwoord is script");
}

alert(`De quiz is afgerond, beste ${naam}, je eindscore is ${score}/3 punten`);