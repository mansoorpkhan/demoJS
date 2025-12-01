 // ✅ Array of Objects
    const products = [
        {
            name: "MacBook Air M2",
            price: 82000,
            img: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg"
        },
        {
            name: "Dell XPS 13",
            price: 95000,
            img: "https://m.media-amazon.com/images/I/61r5nXKXoDL._AC_SL1500_.jpg"
        },
        {
            name: "HP Pavilion 15",
            price: 58000,
            img: "https://m.media-amazon.com/images/I/71C0pWAfVKL._AC_SL1500_.jpg"
        },
        {
            name: "Lenovo IdeaPad Slim 5",
            price: 48000,
            img: "https://m.media-amazon.com/images/I/71r4xH2t8XL._AC_SL1500_.jpg"
        }
    ];

    const container = document.getElementById("productContainer");

    // ✅ For Loop to Dynamically Add Products
    for (let i = 0; i < products.length; i++) {
        const item = products[i];

        // HTML structure for each card
        container.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button class="cart-btn" onclick="addToCart('${item.name}')">Add to Cart</button>
                <button class="details-btn" onclick="showDetails('${item.name}',${item.price})">Details</button>
            </div>
        `;
    }

    // Button functions
    function addToCart(name) {
        alert(name + " added to cart!");
    }

    function showDetails(name, price) {
        alert("Product: " + name + "\nPrice: ₹" + price);
    }

    document.getElementById("toggleBtn").onclick = function () {
    const body = document.body;

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
};
