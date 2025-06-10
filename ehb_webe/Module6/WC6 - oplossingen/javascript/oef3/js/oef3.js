
let b = document.getElementById('btn1');
let div = document.getElementById('container');

b.addEventListener('click', function () {

  let p = document.createElement('p');
  let text = document.createTextNode("Dom manipulatie werkt");
  p.appendChild(text);
  div.appendChild(p);

  // vorige lijnen zou je ook eenvoudiger kunnen met :
  // p.textContent = "Yes! Het werkt"


  // Ter info: "prepend"
  //div.insertBefore(p, div.children[0]);
});


// of
// Je schrijft een aparte functie die je dan aanroept bij
// het click event
// b.addEventListener('click', addParagraph);

// function addParagraph() {
//  let p = document.createElement('p');
//  let text = document.createTextNode("Dom manipulatie werkt");
//  p.appendChild(text);
//  div.appendChild(p);
// }