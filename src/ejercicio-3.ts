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

export function meanAndConcatenate(vector: Array<number | string>) {
  let values: Array<number> = vector.filter(Number) as Array<number>;
  let resultado: number = 0;
  let contador: number = 0;

  for (let indice: number = 0; indice < values.length; indice ++) {
    resultado += values[indice];
    contador += 1;
  }
  // console.log(`${resultado}/${contador} = ${resultado/contador}`);

  let cadena: Array<string | number> = [];

  for (let indice: number = 0; indice < vector.length; indice ++) {
    if (typeof(vector[indice]) === 'string') {
      cadena.push(vector[indice]);
    }
  }

  // console.log(`${cadena}`);
  // console.log(cadena.join(''));

  let final: Array<number | string> = [];
  return (final.concat((resultado/contador), cadena.join('')));
}

const vector_1: Array<number | string> = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 0, 2, 'x'];
const vector_2: Array<number | string> = ['h', 'o', 'l', 'a', 1, 2, 3];

console.log(meanAndConcatenate(vector_1));
console.log(meanAndConcatenate(vector_2));
