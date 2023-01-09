import { crearArchivo } from './helpers/multiplicar.js';  //esto es desestructuración
import argv from './config/yargs.js';   //esto es solo para la versión vieja de npode, que no usa módulos ES

console.clear();


crearArchivo(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))  //ocupa el texto que retorna la función y lo concatena con 'creado'
    .catch(err => console.log(err)); 
