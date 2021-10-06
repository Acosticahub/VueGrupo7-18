const mongoose = require("mongoose");

//esto es para validar el correo
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'dirección de mail invalida'




// MODELO DE CLIENTES
const clientSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: [true, 'Por favor digite un nombre']
        },
        last: {
            type: String,
            required: [true, 'Por favor digite un nombre']
        }
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


//Esto es para que me retorne el nombre completo
clientSchema.virtual('fullName').get(function(){
    return this.name.first + '' + this.name.last;
});

//hasta aquí todo lo que es de clientes



//exportación

module.exports = mongoose.model("Client", clientSchema);
