const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const Rol = require('./database/models/rol');
const Usuario = require('./database/models/usuario');
const Articulo = require('./database/models/articulo');
const Categoria = require('./database/models/categoria');
const Cliente = require('./database/models/cliente');
const Detalle_venta = require('./database/models/detalle_venta');
const Venta = require('./database/models/venta');


// configuracion cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// creacion de rol modo test
app.use(express.json());
const rol = new Rol({
    nombreRol: 'Aministrador',
    descripcion: 'Control total',
    estado: 1
    
});
rol.save();
app.get('/getRol', (req, res) => {
    Rol.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})
// creacion de usuario modo test
app.use(express.json());
const usuario = new Usuario({
    nombreUsuario: 'Carlos',
    apellido: 'Montaño',
    tipoDocumento: 'Cedula',
    direcion: 'Av.las lomas',
    telefono: 7451210,
    clave: 'admin',
    estado: 1
});
usuario.save();
app.get('/getUsuario', (req, res) => {
    Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

// creacion de Articulo modo test
app.use(express.json());
const articulo = new Articulo({

    nombreProducto: 'Pepsi',
    descripcion: 'de 3 litros',
    precio: 20,
    cantidad: 10,
    imagen: 'asd'
});
articulo.save();
app.get('/getArticulo', (req, res) => {
    Articulo.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

// creacion de categoria modo test
const categoria = new Categoria({

    nombreCategoria: 'Gaseosa'
    
});
categoria.save();
app.get('/getCategoria', (req, res) => {
    Categoria.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

// creacion de Cliente modo test
app.use(express.json());
const cliente = new Cliente({
    nombreCliente: 'Roly',
    apellido: 'Menesez',
    tipoDocumento: 'Cedula',
    numeroDocumento: 4101200,
    direcion: 'Av. Petrolera',
    telefono: 7451210,
    email:'roly_01@hotmail.com'
});
cliente.save();
app.get('/getCliente', (req, res) => {
    Cliente.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

// creacion de Detalle_venta modo test
app.use(express.json());
const detalle_venta = new Detalle_venta({
    nombreCliente: 'Coca Cola',
    cantidad: 2,
    precio: '8',
    descuento: 1
});
detalle_venta.save();
app.get('/getDetalle_venta', (req, res) => {
    Detalle_venta.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})
// creacion de venta modo test
app.use(express.json());
const venta = new Venta({

    numeroComprobante: 2100,
    tipoComprobante: 'Pasaporte',
    fecha: 20-05-2021,
    total: 10,
    estado: 1
});
venta.save();
app.get('/getVenta', (req, res) => {
    Venta.find({})
        .then((list) => {res.send(list); console.log(list)})
        .then((error) => {console.log(error)});
})

app.listen( 3000, () => {
    console.log('iniciando server en puerto 3000');
});