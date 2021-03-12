/**
 * A continuación, importamos la clase punto del ejercicio 6,
 * que se encentra en la mismo directorio
 */

import {Punto} from "./ejercicio-6";

/**
 * Función que calcula la ruta en un 'tablero', de puntos, el tablero
 * lo representamos también como un punto, porque no es necesario
 * representarlo como una matriz, solo debemos conocer los puntos finales,
 * es decir donde acaba.
 * @param punto_1 el punto inicial, desde el que partimos
 * @param punto_2 el punto final, al que queremos llegar
 * @param tablero el tablero, que en realidad también es un punto
 * @returns o una cadena de texto, en el caso de que no se cumplan las
 * condiciones, o un vector de caracteres, mostrando el camino
 */

export function agent(punto_1: Punto, punto_2: Punto, tablero: Punto ): Array<string> | string {
  let cadena_aux: Array<string> = [];

  if ( (punto_1.coordenada_X <= tablero.coordenada_X) && (punto_2.coordenada_X <= tablero.coordenada_X) && (punto_1.coordenada_Y <= tablero.coordenada_Y) && (punto_2.coordenada_Y <= tablero.coordenada_Y) ) {
    console.log(`El tablero es suficiente, y los puntos son correctos, a continuación se mustra el camino\n`);
  } else {
    return 'Alguna de las coordenadas de los puntos es mayor que el tablero\n';
  }

  let indice_X: number = punto_1.coordenada_X;
  /**
   * Bucle while, en este caso, comprobamos en la coordenada X, vamos
   * yendo a derecha o izquierda, segun sea el valor mayor o menor que el
   * punto 2, el punto auxiliar al punto 2
   */
  while (indice_X != punto_2.coordenada_X) {
    if (indice_X < punto_2.coordenada_X) {
      indice_X += 1;
      cadena_aux.push("East");
      // console.log(`${cadena_aux}`);
    }
    if (indice_X > punto_2.coordenada_X) {
      indice_X -= 1;
      cadena_aux.push("West");
      // console.log(`${cadena_aux}`);
    }
  }

  // console.log(cadena_aux);

  /**
   * Lo mismo para la coordenada Y
   */

  let indice_Y: number = punto_1.coordenada_Y;

  while (indice_Y != punto_2.coordenada_Y) {
    if (indice_Y < punto_2.coordenada_Y) {
      indice_Y += 1;
      cadena_aux.push("North");
      // console.log(`${cadena_aux}`);
    }
    if (indice_Y > punto_2.coordenada_Y) {
      indice_Y -= 1;
      cadena_aux.push("South");
      // console.log(`${cadena_aux}`);
    }
  }

  // console.log(cadena_aux);

  return cadena_aux;
}


let punto_1: Punto = new Punto(5, 9);
let punto_2: Punto = new Punto(4, 8);
let tablero: Punto = new Punto(10, 10);

console.log(agent(punto_1, punto_2, tablero));
