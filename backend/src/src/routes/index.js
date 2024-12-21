const express = require("express");
const authRoutes = require("./auth");
const productRoutes = require("./product");
const orderRoutes = require("./order");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

module.exports = router;