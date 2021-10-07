const mongoose = require("mongoose");

//Modelo de Productos
const productShema = mongoose.Schema({
  reference: {
    type: Number,
    required: [true, "Ingrese la referencia del Producto."],
  },
  name: {
    type: String,
    required: [true, "Ingrese un nombre para el Producto."],
  },
  description: {
    type: String,
    maxlength: 160,
  },
  stock: {
    type: Number,
    required: [true, "Ingrese el Stock."],
  },
  pricein: {
    type: Number,
    required: [true, "Ingrese el Precio de Entrada."],
  },
  priceout: {
    type: Number,
    required: [true, "Ingrese el Precio de Venta."],
  },
  category: {
    type: String,
    required: [true, "Seleccione una Categoría."],
    enum: [
      "Cuadernos",
      "Lapiceros y lápiz",
      "Plastilina",
      "Papeles",
      "Cartulinas",
      "Foami",
      "Vinilos",
      "Pinceles",
    ],
  },
  img: {
    type: String,
  },
});

//Exportación
module.exports = mongoose.model("Product", productShema);
