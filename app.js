let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);

        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    }
});

// Render cart
if (document.getElementById("cart-items")) {
    const cartItemsEl = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    cartItemsEl.innerHTML = "";

    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;

        cartItemsEl.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td><button class="btn" onclick="removeItem(${i})">Remove</button></td>
            </tr>
        `;
    });

    totalEl.textContent = total.toFixed(2);
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
