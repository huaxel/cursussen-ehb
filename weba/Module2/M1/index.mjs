/*
Vereisten:
    Gebruik een array van objecten voor de producten
    Elk product moet een naam en prijs hebben
    Gebruik array methods voor toevoegen, verwijderen en sorteren
    Toon bij elk product een verwijder-knop
    Update het totaal automatisch
*/

document.addEventListener("DOMContentLoaded", function () {
    const elementIds = [
        "productName",
        "productPrice",
        "addToCart",
        "sortByPrice",
        "cartItems",
        "total",
    ];

    const [
        productNameInput,
        productPriceInput,
        addToCart,
        sortByPriceButton,
        cartItems,
        totalAmount,
    ] = elementIds.map((id) => document.getElementById(id));

    let products = [];

    function addProduct() {
        const productName = productNameInput.value;
        const price = parseFloat(productPriceInput.value);
        if (productName && !isNaN(price)) {
            const product = { productName, price };
            products.push(product);
            updateCart();
            productNameInput.value = "";
            productPriceInput.value = "";
        }
    }

    function removeProduct(index) {
        products.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        products.forEach((product, index) => {
            const li = document.createElement("li");
            li.textContent = `${product.productName} - € ${product.price.toFixed(2)}`;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Verwijder";
            removeButton.addEventListener("click", () => removeProduct(index));
            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += product.price;
        });
        totalAmount.textContent = `${total.toFixed(2)}`;
    }

    function sortProductsByPrice() {
        products.sort((a, b) => b.price - a.price);
        updateCart();
    }

    addToCart.addEventListener("click", addProduct);
    sortByPriceButton.addEventListener("click", sortProductsByPrice);
});
