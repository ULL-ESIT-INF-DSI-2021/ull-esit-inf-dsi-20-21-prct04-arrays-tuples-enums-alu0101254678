/**
 * Clase punto general, funciona igual que la clase punto, del ejercicio
 * 6, los metodos son los mismos, aunque la particularidad de esta clase
 * es que tiene como minimo tres coordenadas
 * Las otras coordenas se gestionan con dos atributos, uno que es dimensiones
 * que indica el total de coordenadas, y un vector de coordenadas, que indican
 * las coordenadas posteriores a la coordenada X, Y, y Z.
 * Los métodos son ligeramente distintos.
 */

export class Punto_General {
  coordenada_X: number;
  coordenada_Y: number;
  coordenada_Z: number;
  dimensiones: number;
  vector_coor_d: Array<number>;

  constructor(coordenada_X: number, coordenada_Y: number, coordenada_Z: number, dimensiones: number, vector_coor_d: Array<number>) {
    this.coordenada_X = coordenada_X;
    this.coordenada_Y = coordenada_Y;
    this.coordenada_Z = coordenada_Z;
    console.assert(dimensiones === 3 + vector_coor_d.length);
    this.dimensiones = dimensiones;
    this.vector_coor_d = vector_coor_d;
  }

  sum_puntos(punto_2: Punto_General): Punto_General {
    let suma_coordenada_X: number = this.coordenada_X + punto_2.coordenada_X;
    let suma_coordenada_Y: number = this.coordenada_Y + punto_2.coordenada_Y;
    let suma_coordenada_Z: number = this.coordenada_Z + punto_2.coordenada_Z;
    let vector_sum_coord: Array<number> = [];

    if ( (this.dimensiones === punto_2.dimensiones) && (this.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < this.vector_coor_d.length; indice ++) {
        vector_sum_coord[indice] = this.vector_coor_d[indice] + punto_2.vector_coor_d[indice];
      }
    }

    let punto: Punto_General = new Punto_General(suma_coordenada_X, suma_coordenada_Y, suma_coordenada_Z, this.dimensiones, vector_sum_coord);
    return punto;
  }

  res_puntos(punto_2: Punto_General): Punto_General {
    let resta_coordenada_X: number = punto_2.coordenada_X - this.coordenada_X;
    let resta_coordenada_Y: number = punto_2.coordenada_Y - this.coordenada_Y;
    let resta_coordenada_Z: number = punto_2.coordenada_Z - this.coordenada_Z;
    let vector_res_coord: Array<number> = [];

    if ( (this.dimensiones === punto_2.dimensiones) && (this.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < this.vector_coor_d.length; indice ++) {
        vector_res_coord[indice] = punto_2.vector_coor_d[indice] - this.vector_coor_d[indice];
      }
    }

    let punto: Punto_General = new Punto_General(resta_coordenada_X, resta_coordenada_Y, resta_coordenada_Z, this.dimensiones, vector_res_coord);
    return punto;
  }

  prod_escalar(valor: number): number {
    let resultado_suma_coord: number = 0;

    let resultado: number = ( (this.coordenada_X * valor) + (this.coordenada_Y * valor) + (this.coordenada_Z * valor) );

    for (let indice = 0; indice < this.vector_coor_d.length; indice ++) {
      resultado_suma_coord += this.vector_coor_d[indice] * valor;
    }

    resultado += resultado_suma_coord;
    return resultado;
  }

  dist_Eucl(punto_2: Punto_General): number {
    let primera_coordenada: number = (this.coordenada_X - punto_2.coordenada_X) * (this.coordenada_X - punto_2.coordenada_X);
    let segunda_coordenada: number = (this.coordenada_Y - punto_2.coordenada_Y) * (this.coordenada_Y - punto_2.coordenada_Y);
    let tercera_coordenada: number = (this.coordenada_Z - punto_2.coordenada_Z) * (this.coordenada_Z - punto_2.coordenada_Z);

    let resultado: number = 0;
    if ( (this.dimensiones === punto_2.dimensiones) && (this.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < this.vector_coor_d.length; indice ++) {
        resultado += ( (this.vector_coor_d[indice] - punto_2.vector_coor_d[indice]) * (this.vector_coor_d[indice] - punto_2.vector_coor_d[indice]) );
      }
    }

    return Math.sqrt( (primera_coordenada + segunda_coordenada + tercera_coordenada + resultado) );
  }
}

let punto_1: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
console.log(`${punto_1.coordenada_X}`);
console.log(`${punto_1.coordenada_Y}`);
console.log(`${punto_1.coordenada_Z}`);
console.log(`${punto_1.dimensiones}`);
console.log(`${punto_1.vector_coor_d}`);

let punto_2: Punto_General = new Punto_General(1, 2, 3, 5, [1, 2]);
console.log(`${punto_2.coordenada_X}`);
console.log(`${punto_2.coordenada_Y}`);
console.log(`${punto_2.coordenada_Z}`);
console.log(`${punto_2.dimensiones}`);
console.log(`${punto_2.vector_coor_d}`);

console.log(punto_1.sum_puntos(punto_2));
console.log(punto_1.res_puntos(punto_2));

console.log(punto_1.prod_escalar(3));
