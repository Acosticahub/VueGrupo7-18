const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    name: {
        first: String,
        last: String,
        required: true
    },
    mail: String,
    contact: Number,
    identification: {
        type: Number,
        required: true
    },
    typeid: String,
    date: { type: Date, default: Date.now}
});




//Mensaje de error

// Mensaje de validación
module.exports = mongoose.model("Client", clientSchema);
