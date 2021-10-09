const mongoose = require("mongoose");

//esto es para validar el correo
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'dirección de mail invalida'




// MODELO DE CLIENTES
const clientSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Por favor digite un nombre']
        },
    lastname: {
        type: String,
        required: [true, 'Por favor digite un apellido']
        },
    mail: mongoose.SchemaTypes.Email,
    contact: {
        type: String,
        maxlength: 10
    },
    identification: {
        type: Number,
        required: [true, 'Digite su número de identificación']
    },
    typeid: {
        type: String,
        required: [true, 'Seleccione un tipo de identificación válido'],
        enum: ['CC', 'TI', 'Pasaporte', 'NIP']
    },
    date: { type: Date, default: Date.now}
});


//hasta aquí todo lo que es de clientes



//exportación

module.exports = mongoose.model("Client", clientSchema);
