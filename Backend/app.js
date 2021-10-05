require('dotenv').config();

// configuración del servidor web
const express = require('express');
const cors = require('cors'); //habilitar la conexión desde cualquier fuente



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// //Conectandonos a MongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
.then(  ()  => console.log("Conected to database")  )
.catch( (err)=> console.error(err)  );


//definir rutas
app.use("/api", require("./routes/routes"));

//iniciar servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

