class Punto_General {
  coordenada_X: number;
  coordenada_Y: number;
  coordenada_Z: number;
  dimensiones: number;
  vector_coor_d: Array<number>;

  constructor(coordenada_X: number, coordenada_Y: number, coordenada_Z: number, dimensiones: number, vector_coor_d: Array<number>) {
    this.coordenada_X = coordenada_X;
    this.coordenada_Y = coordenada_Y;
    this.coordenada_Z = coordenada_Z;
    console.assert(dimensiones === vector_coor_d.length);
    this.dimensiones = dimensiones;
    this.vector_coor_d = vector_coor_d;
  }

  sum_puntos(punto_1: Punto_General, punto_2: Punto_General): Punto_General {
    let suma_coordenada_X: number = punto_1.coordenada_X + punto_2.coordenada_X;
    let suma_coordenada_Y: number = punto_1.coordenada_Y + punto_2.coordenada_Y;
    let suma_coordenada_Z: number = punto_1.coordenada_Z + punto_2.coordenada_Z;
    let vector_sum_coord: Array<number> = [];

    if ( (punto_1.dimensiones === punto_2.dimensiones) && (punto_1.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < punto_1.dimensiones; indice ++) {
        vector_sum_coord[indice] = punto_1.vector_coor_d[indice] + punto_2.vector_coor_d[indice];
      }
    }

    let punto: Punto_General = new Punto_General(suma_coordenada_X, suma_coordenada_Y, suma_coordenada_Z, 3 + punto_1.dimensiones, vector_sum_coord);
    return punto;
  }

  res_puntos(punto_1: Punto_General, punto_2: Punto_General): Punto_General {
    let resta_coordenada_X: number = punto_2.coordenada_X - punto_1.coordenada_X;
    let resta_coordenada_Y: number = punto_2.coordenada_Y - punto_1.coordenada_Y;
    let resta_coordenada_Z: number = punto_2.coordenada_Z - punto_1.coordenada_Z;
    let vector_res_coord: Array<number> = [];

    if ( (punto_1.dimensiones === punto_2.dimensiones) && (punto_1.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < punto_1.dimensiones; indice ++) {
        vector_res_coord[indice] = punto_2.vector_coor_d[indice] - punto_1.vector_coor_d[indice];
      }
    }

    let punto: Punto_General = new Punto_General(resta_coordenada_X, resta_coordenada_Y, resta_coordenada_Z, 3 + punto_1.dimensiones, vector_res_coord);
    return punto;
  }

  prod_escalar(punto_1: Punto_General, valor: number): number {
    let resultado_suma_coord: number = 0;

    let resultado: number = ( (punto_1.coordenada_X * valor) + (punto_1.coordenada_Y * valor) + (punto_1.coordenada_Z * valor) );

    for (let indice = 0; indice < punto_1.vector_coor_d.length; indice ++) {
      resultado_suma_coord += punto_1.vector_coor_d[indice];
    }

    resultado += resultado_suma_coord;
    return resultado;
  }

  dist_Eucl(punto_1: Punto_General, punto_2: Punto_General): number {
    let primera_coordenada: number = (punto_1.coordenada_X - punto_2.coordenada_X) * (punto_1.coordenada_X - punto_2.coordenada_X);
    let segunda_coordenada: number = (punto_1.coordenada_Y - punto_2.coordenada_Y) * (punto_1.coordenada_Y - punto_2.coordenada_Y);
    let tercera_coordenada: number = (punto_1.coordenada_Z - punto_2.coordenada_Z) * (punto_1.coordenada_Z - punto_2.coordenada_Z);

    let resultado: number = 0;
    if ( (punto_1.dimensiones === punto_2.dimensiones) && (punto_1.dimensiones > 3) && (punto_2.dimensiones > 3) ) {
      for (let indice = 0; indice < punto_1.dimensiones; indice ++) {
        resultado += ( (punto_1.vector_coor_d[indice] - punto_2.vector_coor_d[indice]) * (punto_1.vector_coor_d[indice] - punto_2.vector_coor_d[indice]) );
      }
    }

    return Math.sqrt( (primera_coordenada + segunda_coordenada + tercera_coordenada + resultado) );
  }
}
