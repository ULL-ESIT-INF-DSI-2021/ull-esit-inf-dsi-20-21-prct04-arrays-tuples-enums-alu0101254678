"use strict";
let cadena_01 = "hola";
let cadena_02 = "lado";
let cadena_1_aux = "";
let cadena_2_aux = "";
function meshArray(vector) {
    if (vector.length === 0) {
        return "El vector está vacío";
    }
    if (vector.length === 1) {
        return "El vector contiene un elemento";
    }
    if (vector.length === 2) {
        let tamanio = vector[0].length;
        for (let indice = tamanio; indice > 0; indice--) {
            cadena_1_aux = vector[0][indice - 1] + cadena_1_aux;
            console.log(`${cadena_1_aux}`);
            if (vector[1].startsWith(cadena_1_aux)) {
                return 'p';
            }
        }
        return 'q';
    }
    if (vector.length > 2) {
        let centinela = true;
        let cadena_entera = "";
        let contador_negativo = 0;
        for (let indice = 0; indice < vector.length; indice++) {
            let tamanio = vector[indice].length;
            // console.log(`${tamanio}`);
            for (let indice_1 = tamanio; indice_1 > 0; indice_1--) {
                cadena_1_aux = vector[indice][indice_1 - 1] + cadena_1_aux;
                // console.log(`${cadena_1_aux}`);
                if (vector[indice + 1]) {
                    if (vector[indice + 1].startsWith(cadena_1_aux)) {
                        cadena_entera += cadena_1_aux;
                    }
                    else {
                        contador_negativo += 1;
                        // console.log(`${contador_negativo}`);
                    }
                }
                // console.log(`${cadena_entera}`);
            }
            if (contador_negativo === vector[indice].length) {
                return "Error de concatenación\n";
            }
            else {
                contador_negativo = 0;
            }
            cadena_1_aux = '';
        }
        return cadena_entera;
    }
}
console.log(meshArray(['allow', 'lowering', 'ringmaster', 'terror']));
