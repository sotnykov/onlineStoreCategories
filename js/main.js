const productsByCategory = {
  electronics: ["Phone", "Laptop", "Tablet"],
  clothing: ["T-Shirt", "Jeans", "Skirt"],
  books: ["Roman", "Fantasy", "Detective"]
};

const categories = document.querySelectorAll('.category');
const productsList = document.querySelector('.products ul');
const productInfo = document.querySelector('.product-info');
const buyButton = document.querySelector('.buy-button');

categories.forEach(category => {
  category.addEventListener('click', () => {
    const selectedCategory = category.getAttribute('data-category');
    showProducts(selectedCategory);
  });
});

function showProducts(category) {
  productsList.innerHTML = '';

  productsByCategory[category].forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    li.addEventListener('click', () => showProductInfo(product));
    productsList.appendChild(li);
  });

  buyButton.style.display = 'none';
  productInfo.style.display = 'none';
}

function showProductInfo(product) {
  productInfo.innerHTML = `<p>Product description: ${product}</p>`;
  buyButton.style.display = 'block';
  buyButton.removeEventListener('click', buyProductOnce);
  buyButton.addEventListener('click', buyProductOnce);
  productInfo.style.display = 'inline-block';
}

function buyProductOnce() {
  alert('The product is purchased!');
  productInfo.style.display = 'none';
  buyButton.style.display = 'none';
  showProducts();
}