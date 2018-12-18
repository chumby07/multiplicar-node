const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multi/multi');

let com = argv._[0];

switch (com) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}