"use strict";
/**
 * Calcula la media y concatena los caracteres de un vector
 * de números y cadenas de caracteres,y retorna el vector dividido,
 * por un lado, la media de los números, y por otro, las palabras
 * concatenadas.
 * @param vector un vector de cadenas de caracteres o numeros
 * Ejemplo de uso:
 * ```
 * const vector_1: Array<number | string> = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 0, 2, 'x'];
 *  const vector_2: Array<number | string> = ['h', 'o', 'l', 'a', 1, 2, 3];
 *  meanAndConcatenate(vector_1);
 *  meanAndConcatenate(vector_2);
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.meanAndConcatenate = void 0;
function meanAndConcatenate(vector) {
    let values = vector.filter(Number);
    let resultado = 0;
    let contador = 0;
    for (let indice = 0; indice < values.length; indice++) {
        resultado += values[indice];
        contador += 1;
    }
    // console.log(`${resultado}/${contador} = ${resultado/contador}`);
    let cadena = [];
    for (let indice = 0; indice < vector.length; indice++) {
        if (typeof (vector[indice]) === 'string') {
            cadena.push(vector[indice]);
        }
    }
    // console.log(`${cadena}`);
    // console.log(cadena.join(''));
    let final = [];
    return (final.concat((resultado / contador), cadena.join('')));
}
exports.meanAndConcatenate = meanAndConcatenate;
const vector_1 = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 0, 2, 'x'];
const vector_2 = ['h', 'o', 'l', 'a', 1, 2, 3];
console.log(meanAndConcatenate(vector_1));
console.log(meanAndConcatenate(vector_2));
