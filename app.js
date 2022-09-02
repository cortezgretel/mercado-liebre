const express = require('express');
const app = express();
const path = require('path');

//ruta de archivos estaticos
app.use(express.static(path.resolve(__dirname, './public')));


//levantar un servidor con express, usamos metodo listen(puerto,callback)
app.listen(3000,() => {
    //callback
    console.log('servidor corriendo');
});

// enruta las solicitudes HTTP GET a la ruta que se especifica 
//con las funciones de devolución de llamada especificadas.
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});