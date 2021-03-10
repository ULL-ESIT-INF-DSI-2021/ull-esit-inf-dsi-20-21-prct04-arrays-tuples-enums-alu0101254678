function escalar(vector_auxiliar: Array<number>, valor: number) {
  let vector_def: Array<number> = []
  for (let indice = 0; indice < vector_auxiliar.length; indice ++) {
    vector_auxiliar[indice] = vector_auxiliar[indice] * valor;
    vector_def.push(vector_auxiliar[indice]);
    //console.log(`${vector_auxiliar}`);
  }
  console.log(`${vector_def}`);
}


function multiplyAll(vector: Array<number>, valor: number):void {

  let vector_auxiliar: Array<number> = vector;
  // console.log(`${vector_auxiliar}`);

  escalar(vector_auxiliar, valor);
}

multiplyAll([2, 6, 8], 3);
