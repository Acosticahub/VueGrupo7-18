const express = require("express");
const clientController = require("../controllers/Client.ctrl");
const productController = require("../controllers/Product.ctrl");
const router = express.Router();

//client Routes
router.get("/clients", clientController.getAll);

router.get("/clients/:identification", clientController.getByCode);

router.post("/clients", clientController.create);

router.put("/clients/:identification", clientController.update);

router.delete("/clients/:identification", clientController.delete);
// Fin Clients route

//Product Routes
router.get("/products", productController.getAll);

router.get("/products/:reference", productController.getByCode);

router.post("/products", productController.create);

router.put("/products/:reference", productController.update);

router.delete("/products/:reference", productController.delete);
// Fin Products route

module.exports = router;
