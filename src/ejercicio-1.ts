/**
 * Calcula la __suma__ de __una__ o __dos__ __resistencias__
 * la funcion __ignora_ el paso de mas de tres valores
 * @param _param vector de cadenas de caracteres
 * @returns un vector con los códigos de las resistencias o un número
 * Ejemplo de invocación:
 * ```
 * let vector_cad: Array<string> = ["negro", "marron"];
 * console.log(decodeResistor(vector_cad));
 * ```
 */

export function decodeResistor(_param: Array<string>): Array<number> | number {
  let vector_s: Array<string> = ["negro","marron","rojo","naranja","amarillo","verde","azul","violeta","gris","blanco"];
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
      }
    } if (codigo_1 === 0) {
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
    }
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[1].includes(vector_s[indice])) {
        codigo_2 = indice;
      }
    }
    vector.push(codigo_1, codigo_2);
    return vector;
    /* if (codigo_1  === codigo_2 === 0) {
      // console.log(`Hola`);
      return -1;
    } else {
      vector.push(codigo_1, codigo_2);
      return vector;
    }*/
  }
}


let vector_cad: Array<string> = ["negro", "marron", "verde"];
console.log(decodeResistor(vector_cad));
