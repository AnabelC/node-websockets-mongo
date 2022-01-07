const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res){
    res.header({
        "custom-header":"Nuestro valor personalizado",
    });
    console.log(req.headers);
    console.log(req.body);
    res.send('Lista de Mensajes');
})

router.post('/message', function (req, res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje '+ req.body.text +'añadido');
})

router.delete('/', function (req, res){
    res.send('Mensaje eliminado');
})

// app.use('/', function (req, res){
//     res.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta eschuchando en http://localhost:3000');