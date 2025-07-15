// Category icon mapping (Font Awesome or emoji for demo)
const categoryIcons = {
  "men's clothing": "👔",
  "women's clothing": "👗",
  "jewelery": "💍",
  "electronics": "💻",
};

let allProducts = [];
let filteredProducts = [];
let categories = [];

const productsRow = document.getElementById("products-row");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function renderProducts(products) {
  productsRow.innerHTML = "";
  if (products.length === 0) {
    productsRow.innerHTML =
      '<div class="col-12 text-center">No products found.</div>';
    return;
  }
  products.forEach((product) => {
    const icon = categoryIcons[product.category] || "";
    const card = document.createElement("div");
    card.className = "col-md-4 col-lg-3 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top p-3" alt="${
      product.title
    }">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-2">${
            icon ? `<span class='category-icon'>${icon}</span>` : ""
          }${product.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">$${product.price.toFixed(
            2
          )}</h6>
          <p class="card-text mb-2" style="flex:1;">${product.description}</p>
          <span class="badge bg-secondary align-self-start">${
            product.category
          }</span>
        </div>
      </div>
    `;
    productsRow.appendChild(card);
  });
}

function filterAndRender() {
  let selectedCategory = categorySelect.value;
  let searchTerm = searchInput.value.trim().toLowerCase();
  let sorted = [...allProducts];

  // Filter by category
  if (selectedCategory !== "all") {
    sorted = sorted.filter((p) => p.category === selectedCategory);
  }
  // Search
  if (searchTerm) {
    sorted = sorted.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
  }
  // Sort
  const sortBy = sortSelect.value;
  if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (sortBy === "title-asc")
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "title-desc")
    sorted.sort((a, b) => b.title.localeCompare(a.title));

  renderProducts(sorted);
}

function populateCategories() {
  categorySelect.innerHTML =
    '<option value="all">All Categories</option>' +
    categories
      .map(
        (cat) =>
          `<option value="${cat}">${
            cat.charAt(0).toUpperCase() + cat.slice(1)
          }</option>`
      )
      .join("");
}

// Event listeners
categorySelect.addEventListener("change", filterAndRender);
searchInput.addEventListener("input", filterAndRender);
sortSelect.addEventListener("change", filterAndRender);

// Fetch products and categories
fetch("/api/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    categories = [...new Set(data.map((p) => p.category))];
    populateCategories();
    filterAndRender();
  });

fetch("/api/products/categories")
  .then((response) => response.json())
  .then((categories) => {
    // ...existing code to render categories...
  });

// When filtering by category:
// fetch(`/api/products/category/${category}`)
// ...
