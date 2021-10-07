const express = require("express");
const clientController = require("../controllers/Client.ctrl")
const userController = require ("../controllers/User.crtl")
const router = express.Router();

//client Routes
router.get("/clients", clientController.getAll)

router.get("/clients/:identification", clientController.getByCode)

router.post("/clients",  clientController.create)

router.put("/clients/:identification",  clientController.update);

router.delete("/clients/:identification",  clientController.delete);

// Fin Clients route

// User Routes
router.get("/users", userController.getAll)

router.get("/users/:username", userController.getByCode)

router.post("/users", userController.create)

router.put("/users/:username", userController.update)

router.delete("/users/:username", userController.delete)



module.exports = router;