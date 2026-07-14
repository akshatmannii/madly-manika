fetch("data/products.json")
.then(response => response.json())
.then(products => {

    const grid = document.getElementById("productGrid");

    products.slice(0,8).forEach(product => {

        grid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.title}">

            <div class="product-info">

                <h3>${product.title}</h3>

                <p>${product.description}</p>

                <div class="price">${product.price}</div>

                <a href="${product.link}" target="_blank" class="buy-btn">
                    View Product
                </a>

            </div>

        </div>

        `;

    });

});