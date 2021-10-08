const mongoose = require("mongoose");

//esto es para validar el correo
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'dirección de mail invalida'




// MODELO DE proveedores
const suplierSchema = mongoose.Schema({
    name: {

        type: String,
        required: [true, 'Por favor digite un nombre']

    },
    mail: mongoose.SchemaTypes.Email,
    contact: {
        type: String,
        maxlength: 10
    },
    ruc: {
        type: Number,
        required: [true, 'Digite su número del ruc']
    },
   
    date: { type: Date, default: Date.now }
});




//hasta aquí todo lo que es de proveedores



//exportación

module.exports = mongoose.model("Suplier", suplierSchema);
