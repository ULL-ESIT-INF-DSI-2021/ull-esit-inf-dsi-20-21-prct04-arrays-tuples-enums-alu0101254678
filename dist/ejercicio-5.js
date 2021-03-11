"use strict";
/**
 * Calcula el producto entre un vector y un valor numérico, y
 * devuelve un vector con el producto realzado en cada posición
 * @param vector_auxiliar vector que se recibe de la otra función
 * @param valor valor que se usa para multiplicar
 * Ejemplo de uso:
 * ```
 * multiplyAll([2, 6, 8], 3); -> [6,18,24]
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyAll = exports.escalar = void 0;
function escalar(vector_auxiliar, valor) {
    let vector_def = [];
    for (let indice = 0; indice < vector_auxiliar.length; indice++) {
        vector_auxiliar[indice] = vector_auxiliar[indice] * valor;
        vector_def.push(vector_auxiliar[indice]);
        // console.log(`${vector_auxiliar}`);
    }
    return vector_def;
}
exports.escalar = escalar;
/**
 * Función que recibe un vector y un valor, e iguala
 * el valor del vector a otro auxiliar y se lo pasa
 * a otra función
 * @param vector un vector numérico
 * @param valor un valor numérico
 */
function multiplyAll(vector, valor) {
    let vector_auxiliar = vector;
    // console.log(`${vector_auxiliar}`);
    let vector_resultado = escalar(vector_auxiliar, valor);
    return vector_resultado;
}
exports.multiplyAll = multiplyAll;
console.log(multiplyAll([2, 6, 8], 3));
console.log(multiplyAll([1, 2, 3, 4, 5, 6], 2));
// console.log(escalar([2, 6, 8], 3));
// console.log(escalar([1, 2, 3, 4, 5, 6], 2));
// Ahora si funcionan bien las dos funciones, no hace falta lo de arriba (comentario),
// estaba usando mal el return.
