const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const ProductService = require("../services/ProductService");
const ProductIntance = new ProductController(new ProductService());
//Product Rutes
router.delete("/products/delete/:id", (req, res, next) => {
  ProductIntance.deleteAProduct(req, res);
});
router.put("/products/update/:id", (req, res, next) => {
  ProductIntance.updateProduct(req, res);
});
router.post("/products/add", (req, res, next) => {
  ProductIntance.registerProduct(req, res);
});
router.get("/product/:id", (req, res, next) => {
  ProductIntance.getAProduct(req, res);
});
router.get("/products", (req, res, next) => {
  ProductIntance.getAllProducts(req, res);
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the Api");
});

module.exports = router;
