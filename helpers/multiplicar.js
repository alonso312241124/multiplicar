const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5) => {
    return new Promise(
        (resolve, rejects) =>{
            console.clear();

            console.log("Argumentos " + process.argv);
            const [,,base] = process.argv;
            console.log("Tabla del " +  base);
        
            let salida = '';
        
            for(let i=1;i<=10;i++){
                salida += `${base} x ${i} = ${base * i} \n`;
            }
        
            let nombreArchivo = `Tabla ${base}.txt`;
        
            fs.writeFile(nombreArchivo, salida, (err) => {
                if( err ) {
                    rejects (err)
                }else{
                    resolve(nombreArchivo);
                }
            })        
        }
    )
}

module.exports = { crearArchivo : crearArchivo }