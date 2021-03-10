"use strict";
function escalar(vector_auxiliar, valor) {
    let vector_def = [];
    for (let indice = 0; indice < vector_auxiliar.length; indice++) {
        vector_auxiliar[indice] = vector_auxiliar[indice] * valor;
        vector_def.push(vector_auxiliar[indice]);
        //console.log(`${vector_auxiliar}`);
    }
    console.log(`${vector_def}`);
}
function multiplyAll(vector, valor) {
    let vector_auxiliar = vector;
    // console.log(`${vector_auxiliar}`);
    escalar(vector_auxiliar, valor);
}
multiplyAll([2, 6, 8], 3);
