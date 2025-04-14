/*
Maak een Product class met een constructor die naam, prijs en voorraad parameters accepteert
Zorg dat de prijs property niet onder 0 kan komen door een setter te gebruiken
Zorg dat de voorraad property niet onder 0 kan komen door een setter te gebruiken
Maak een getter verkoopprijs die de prijs plus 21% BTW teruggeeft
Maak een getter beschikbaar die true teruggeeft als er voorraad is
Creëer minstens drie verschillende producten met verschillende eigenschappen
Toon per product de naam, prijs, verkoopprijs en beschikbaarheid in de 'output' div
*/

class Product {
  constructor(naam, prijs, voorraad) {
    this.naam = naam;
    this.prijs = prijs;
    this.voorraad = voorraad;
  }
  set prijs(value) {
    this._prijs = typeof value === "number" && value > 0 ? value : 0;
  }
  set voorraad(value) {
    this._voorraad = typeof value === "number" && value > 0 ? value : 0;
  }
  get prijs() {
    return this._prijs;
  }

  get voorraad() {
    return this._voorraad;
  }

  get verkoopprijs() {
    return this.prijs * 1.21;
  }
  get beschikbaar() {
    return this.voorraad > 0;
  }

  toonInfo() {
    return `
    <div class="product-card">
        <h2>${this.naam}</h2>
        <p>Inkoopprijs: <span class="price">€${this.prijs.toFixed(2)}</span></p>
        <p>Verkoopprijs (incl. BTW): <span class="price">€${this.verkoopprijs.toFixed(
          2
        )}</span></p>
        <p>Voorraad: ${this.voorraad} stuks</p>
        <p>Status: <span>${
          this.beschikbaar ? "Op voorraad" : "Niet op voorraad"
        }</span></p>
    </div>
    `;
  }
}
const product1 = new Product("iPhone SE");
product1.prijs = 450;
product1.voorraad = 50;

const product2 = new Product("Samsung Galaxy");
product2.prijs = 250;
product2.voorraad = 35;

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = product1.toonInfo() + "<hr>" + product2.toonInfo();
