var express = require('express');
var app = express();

app.get('/', function(req, res) {
    //Recibimos la informacion obtenida en variables via put
        // y las ingresamos dentro del documento
    const body = req.body;

    //Libreria del Documento 




  res.send('Hola Mundo!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});