const express = require("express");
const clientController = require("../controllers/Client.ctrl")
const router = express.Router();

//client Routes
router.get("/clients", clientController.getAll)

router.get("/clients/:identification", clientController.getByCode)

router.post("/clients",  clientController.create)

router.put("/clients/:identification",  clientController.update);

router.delete("/clients/:identification",  clientController.delete);

// Fin Clients route

module.exports = router;