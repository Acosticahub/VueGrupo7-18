const express = require("express");
const clientController = require("../controllers/Client.ctrl");
const productController = require("../controllers/Product.ctrl");
const userController = require("../controllers/User.crtl");
const router = express.Router();

// Client Routes
router.get("/clients", clientController.getAll);

router.get("/clients/:identification", clientController.getByCode);

router.post("/clients", clientController.create);

router.put("/clients/:identification", clientController.update);

router.delete("/clients/:identification", clientController.delete);
// Fin Clients route

// Product Routes
router.get("/products", productController.getAll);
router.get("/products/:reference", productController.getByCode);
router.post("/products", productController.create);
router.put("/products/:reference", productController.update);
router.delete("/products/:reference", productController.delete);
router.patch(
  "/products/:reference/image",
  upload.single("image"),
  productController.changeProductImage
);
// Fin Products route

// Users Routes
router.get("/users", userController.getAll);

router.get("/users/:username", userController.getByCode);

router.post("/users", userController.create);

router.put("/users/:username", userController.update);

router.delete("/users/:username", userController.delete);
// Fin Users route

module.exports = router;
