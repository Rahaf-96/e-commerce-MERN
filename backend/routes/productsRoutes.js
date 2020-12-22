const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Product = require("../models/productModel");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    product
      ? res.json(product)
      : res.status(404).json({ message: "Product not found" });
  })
);
module.exports = router;
