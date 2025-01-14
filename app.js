const { crearArchivo } = require('./helpers/multiplicar.js')
var colors = require('colors');


const base = process.argv[2];


crearArchivo(base)
    .then(nombreArchivo=>console.log(`Archivo creado: ${nombreArchivo}`))
    .catch( err => console.log(err));

console.log('OMG Rainbows!'.rainbow); // rainbow