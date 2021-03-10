let vector_s: Array<string> = ["negro","marron","rojo","naranja","amarillo","verde","azul","violeta","gris","blanco"];
// let vector_n: Array<number> = [0, 1];

let cadena_1: string = "negro";
let cadena_2: string = "marron";

function decodeResistor(_param: Array<string>): Array<number> | number {
  let codigo_1: number = 0;
  let codigo_2: number = 0;
  let vector: Array<number> = [];
  if (_param.length === 0) {
    console.log(`Tienes que escribir los colores\n`);
    return -1;
  }
  if (_param.length === 1) {
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[0].includes(vector_s[indice])) {
        codigo_1 = indice;
      }else {
        codigo_1 = -1;
      }
    } if (codigo_1 === -1) {
      console.log(`Tienes que escribir los colores\n`);
      return -1;
    } else {
      return codigo_1;
    }
  } else {
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[0].includes(vector_s[indice])) {
        codigo_1 = indice;
      }
      if (_param[1].includes(vector_s[indice])) {
        codigo_2 = indice;
      }
    }
    if (vector.push(codigo_1, codigo_2) === 0) {
      console.log(`Hola`);
      return -1;
    } else {
      vector.push(codigo_1, codigo_2);
      return vector;
    }
  }
}

let vector_cad: Array<string> = ["hola"];
console.log(decodeResistor(vector_cad));
