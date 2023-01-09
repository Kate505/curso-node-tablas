//todo esto es privado
import { writeFile, writeFileSync } from 'node:fs';
import colors from 'colors';

export const crearArchivo = async (base = 5, listar = false, h = 10) => {

    try {        

        let salida = '', consola = '';

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.cyan} ${base * i}\n`;
        }


        writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
        })

        if(listar){
            console.log('======================================'.green);
            console.log('============ Tabla del '.green, colors.cyan(base), ' ==========='.green);
            console.log('======================================'.green);
    
            console.log(consola);
        }

        return `tabla-${base}.txt`;  //retorna el texto

    } catch (error) {
        throw error;
    }
}

//aqui lo vamos a exportar para que no sea privado

