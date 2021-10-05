const express = require("express");
const router = express.Router();

//client Routes
router.get("/clients", (req, res) => {
    const mensaje = [
        {code: 1000, name: "daniel", identification: "12345", typeid: "CC", mail: "daniel@gmail.com", contact: "3212321"},
        {code: 1001, name: "alejandro", identification: "54321", typeid: "CC", mail: "alejandro@gmail.com", contact: "1231231"}
    ];
    res.status(200).json(mensaje)
}  )

router.get("/clients/:code", (req, res) => {
    const code = req.params.code;
    const mensaje = {code: code, name: "daniel", identification: "12345", typeid: "CC", mail: "daniel@gmail.com", contact: "3212321"}
    res.status(200).json(mensaje);
}  );

router.post("/clients",  (req, res) => {
    const client = req.body;
    res.status(201).json(client);
} )


// Fin Clients route

module.exports = router;