const { crearArchivo } = require('./helpers/multiplicar.js')
var colors = require('colors');


const base = process.argv[2];


crearArchivo(base)
    .then(nombreArchivo=>console.log(`Archivo creado: ${nombreArchivo}`))
    .catch( err => console.log(err));

 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass