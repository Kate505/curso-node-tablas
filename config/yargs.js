import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
        demandOption: true
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla en consola',
        default: false
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Muestra hasta donde llegará la tabla',
        demandOption: false,
        default: 10
    })
    .argv;

export default argv;
