
async function loadProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');

    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productList.appendChild(productDiv);
    });
}

async function deleteProduct(id) {
    await fetch(`/products/${id}`, { method: 'DELETE' });
    loadProducts();
}

async function editProduct(id) {
    const newName = prompt('Enter new product name:');
    const newDescription = prompt('Enter new product description:');
    const newPrice = prompt('Enter new product price:');

    await fetch(`/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, description: newDescription, price: Number(newPrice) })
    });
    loadProducts();
}

loadProducts();
