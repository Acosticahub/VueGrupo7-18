const express = require("express");
const clientController = require("../controllers/Client.ctrl")
const router = express.Router();

//client Routes
router.get("/clients", clientController.getAll)

router.get("/clients/:code", clientController.getByCode)


router.post("/clients",  clientController.create);


// Fin Clients route

module.exports = router;