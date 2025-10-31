"use strict";
const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/", productController.fetchAllProducts);
router.get("/:id", productController.fetchProductById);
router.delete("/:id", productController.removeProduct);
router.post("/", productController.createProduct);
module.exports = router;
