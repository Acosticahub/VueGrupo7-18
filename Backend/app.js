require('dotenv').config();

// configuración del servidor web
const express = require('express');
const cors = require('cors'); //habilitar la conexión desde cualquier fuente



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//definir rutas
app.get("/",(req,res)  => {
    res.status(200).json("{  'message': 'Hola mundo'}")
} )

//iniciar servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

