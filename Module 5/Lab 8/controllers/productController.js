const axios = require("axios");

const FAKE_STORE_API = "https://fakestoreapi.com";

exports.getAllProducts = async (req, res) => {
  try {
    const response = await axios.get(`${FAKE_STORE_API}/products`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const response = await axios.get(`${FAKE_STORE_API}/products/categories`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const response = await axios.get(
      `${FAKE_STORE_API}/products/category/${encodeURIComponent(category)}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products for category" });
  }
};
