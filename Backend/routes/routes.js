const express = require("express");
const router = express.Router();

//client Routes
router.get("/clients", (req, res) => {
    const mensaje = [
        {code: 1000, name: "daniel", identificación: "12345", tipodeid: "CC", correo: "daniel@gmail.com"},
        {code: 1001, name: "alejandro", identificación: "54321", tipodeid: "CC", correo: "alejandro@gmail.com"}
    ];
    res.status(200).json(mensaje)
}  )

router.get("/clients/:code", (req, res) => {
    const mensaje = {code: 1000, name: "daniel", identificación: "12345", tipodeid: "CC", correo: "daniel@gmail.com"}
    res.status(200).json(mensaje);
}  );

module.exports = router;