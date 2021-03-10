function moveZeros(vector: Array<number>): Array<number> {
  let vector_aux: Array<number> = [];
  let contador: number = 0;
  for (let indice: number = 0; indice < vector.length; indice ++) {
    if (vector[indice] != 0) {
      vector_aux.push(vector[indice]);
    }
    if (vector[indice] === 0) {
      contador += 1;
    }
  }
  if (contador != 0) {
    for (let indice: number = 0; indice < contador; indice ++) {
      vector_aux.push(0);
    }
  }
  return vector_aux;
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
