const mongoose = require("mongoose");

//esto es para validar el correo
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'dirección de mail invalida'




// MODELO DE USUARIOS
const userSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: [true, 'Por favor digite un nombre']
        },
        last: {
            type: String,
            required: [true, 'Por favor digite un apellido']
        }
    },
    mail: mongoose.SchemaTypes.Email,

    contact: {
        type: String,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, "Digite su contraseña"],
        minLength: 8,
    },
    username: {
        type: String,
        required: [true, "Digite su usuario"],
        match: /\w\d.\w/
    },
    identification: {
        type: Number,
        required: [true, 'Digite su número de identificación']
    },
    role: {
        type: String,
        required: [true, 'Selecione un tipo de rol'],
        enum: ['Administrador', 'Usuario'],
    },
});



//Esto es para que me retorne el nombre completo
userSchema.virtual('fullName').get(function () {
    return this.name.first + '' + this.name.last;
});

//hasta aquí todo lo que es de usuarios



//exportación

module.exports = mongoose.model("User", userSchema);