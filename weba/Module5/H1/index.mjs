// Gebruik async/await om deze oefening te implementeren
//
//     Maak een wacht functie die wacht voor een bepaald aantal milliseconden
//     Maak een verlichtBlok functie die:
//         De huidige kleur van een blok opslaat
//         De achtergrondkleur naar wit verandert
//         Wacht voor een bepaalde tijd
//         De oorspronkelijke kleur weer terugzet
//     Maak een startLichtshow async functie die:
//         De blokken eerst van links naar rechts doorloopt
//         Een korte pauze neemt
//         De blokken daarna van rechts naar links doorloopt
//     Voeg een event listener toe aan de startknop
//
document.addEventListener("DOMContentLoaded", () => {
  const startKnop = document.getElementById("startBtn");
  const blocks = document.querySelectorAll(".block");

  // wacht functie met Promise
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Functie die een blok verlicht
  async function verlichtBlok(block) {
    const origineleKleur = block.style.backgroundColor;
    block.style.backgroundColor = "white";
    await wait(500);
    block.style.backgroundColor = origineleKleur;
  }

  async function startLichtshow() {
    for (const block of blocks) {
      await verlichtBlok(block);
      await wait(200);
    }

    await wait(500);
    for (let i = blocks.length - 1; i >= 0; i--) {
      await verlichtBlok(blocks[i]);
      await wait(200);
    }
  }

  startKnop.addEventListener("click", startLichtshow);
});
