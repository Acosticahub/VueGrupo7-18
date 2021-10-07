const express = require("express");
const clientController = require("../controllers/Client.ctrl")
const userController = require("../controllers/User.ctrl")
const router = express.Router();

//client Routes
router.get("/clients", clientController.getAll)

router.get("/clients/:code", clientController.getByCode)


router.post("/clients",  clientController.create);


// Fin Clients route


//user Routes
router.get("/users", userController.getAll)

router.get("/users/:code", userController.getByCode)


router.post("/users",  userController.create);


// Fin users route

module.exports = router;