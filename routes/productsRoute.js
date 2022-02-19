const express = require("express");
const route = express.Router();

const productController = require("../controllers/productsController");

route.get("/:id", productController.home);

module.exports = route;