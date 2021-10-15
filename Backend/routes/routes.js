const express = require("express");
const clientController = require("../controllers/Client.ctrl");
const productController = require("../controllers/Product.ctrl");
const userController = require("../controllers/User.ctrl");
const suplierController = require("../controllers/Suplier.ctrl");
const router = express.Router();

// Client Routes
router.get("/clients", clientController.getAll);

router.get("/sortedclients", clientController.getSorted);

router.get("/countedclients", clientController.count);

router.get("/clients/:identification", clientController.getByCode);

router.post("/clients", clientController.create);

router.put("/clients/:identification", clientController.update);

router.delete("/clients/:identification", clientController.delete);
// Fin Clients route

// Product Routes
router.get("/products", productController.getAll);
router.get("/countedproducts", productController.count);
router.get("/products/:reference", productController.getByCode);
router.post("/products", productController.create);
router.put("/products/:reference", productController.update);
router.delete("/products/:reference", productController.delete);
// Fin Products route

// Users Routes
router.get("/users", userController.getAll);

router.get("/countedusers", userController.count);

router.get("/users/:username", userController.getByCode);

router.post("/users", userController.create);

router.put("/users/:username", userController.update);

router.delete("/users/:username", userController.delete);

router.post("/authenticate", userController.validateUser);
// Fin Users route

// supliers routes
router.get("/supliers", suplierController.getAll);

router.get("/countedsupliers", suplierController.count);

router.get("/supliers/:ruc", suplierController.getByCode);

router.post("/supliers", suplierController.create);

router.put("/supliers/:ruc", suplierController.update);

router.delete("/supliers/:ruc", suplierController.delete);

module.exports = router;
