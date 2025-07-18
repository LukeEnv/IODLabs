const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/categories", productController.getCategories);
router.get("/category/:category", productController.getProductsByCategory);

module.exports = router;
