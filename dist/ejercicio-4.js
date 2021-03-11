"use strict";
/**
 * Mueve los ceros de un vector a sus posiciones finales
 * sin alterar los otros valores del vector
 * @param vector vector de números
 * @returns vector de números con los ceros al final
 * Ejemplo de uso:
 * ```
 * console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
 * console.log(moveZeros([0, 0, 1, 0]));
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
function moveZeros(vector) {
    let vector_aux = [];
    let contador = 0;
    for (let indice = 0; indice < vector.length; indice++) {
        if (vector[indice] != 0) {
            vector_aux.push(vector[indice]);
        }
        if (vector[indice] === 0) {
            contador += 1;
        }
    }
    if (contador != 0) {
        for (let indice = 0; indice < contador; indice++) {
            vector_aux.push(0);
        }
    }
    return vector_aux;
}
exports.moveZeros = moveZeros;
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 0, 1, 0]));
