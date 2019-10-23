const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log(err))
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err))
        console.log('crear');
        break;
    default:
        console.log('comando no reconocidi');
}


// console.log(process.argv);

// let argv = process.argv;

// console.log(argv.base);
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(parametro);


