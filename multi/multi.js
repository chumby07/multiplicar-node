const fs = require('fs');
let data = '';

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado => (${base}); No es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            let x = base * i;
            data += `${base} x ${i} = ${x}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
            console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}