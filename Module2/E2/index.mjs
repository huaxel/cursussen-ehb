document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("recipeName");
  const timeInput = document.getElementById("prepTime");
  const ingredientsInput = document.getElementById("ingredients");
  const kaartButton = document.getElementById("generateCard");
  const result = document.getElementById("result");

  kaartButton.addEventListener("click", function () {
    result.innerHTML = '';

    const nameDisplay = document.createElement("h1");
    nameDisplay.textContent = `🥘 ${nameInput.value}`;

    const timeDisplay = document.createElement("strong");
    timeDisplay.textContent = `⏱️ Bereidingstijd: ${timeInput.value} minuten`;
    const titleIngredients = document.createElement("p");
    titleIngredients.textContent = "Ingrediënten: ";

    const ingredientsList = document.createElement("ul");
    
    function addIngredient(ingredient) {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    } 
    
    const ingredients = ingredientsInput.value.split('\n');
    ingredients.forEach((ingredient) => {
      addIngredient(ingredient.trim());
    });
    result.appendChild(nameDisplay);
    result.appendChild(timeDisplay);
    result.appendChild(titleIngredients);
    result.appendChild(ingredientsList);
  });
});
