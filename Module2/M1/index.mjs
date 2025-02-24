document.addEventListener("DOMContentLoaded", function () {
  const elementIds = [
    "addProduct",
    "productName",
    "productPrice",
    "addToCart",
    "cartControls",
    "sortByPrice",
    "cartItems"
  ];
  
  const [
    addProduct,
    productNameInput,
    productPriceInput,
    addToCart,
    cartControls,
    sortByPrice,
    cartItems
  ] = elementIds.map(id => document.getElementById(id));

  addToCart.addEventListener("click", function () {
    function newProduct(name,price) {
      const li = document.createElement("li");
      li.textContent = `${name} - € ${price}`;
      cartItems.appendChild(li);
    } 
    newProduct(productNameInput.value,productPriceInput.value);
    productNameInput.value = '';
    productPriceInput.value = '';
});
});