class Punto {
  coordenada_X: number;
  coordenada_Y: number;

  constructor(coordenada_X: number, coordenada_Y: number) {
    this.coordenada_X = coordenada_X;
    this.coordenada_Y = coordenada_Y;
  }

  sum_Puntos(punto_1: Punto, punto_2: Punto): Punto {
    let punto: Punto = new Punto(punto_1.coordenada_X + punto_2.coordenada_X, punto_1.coordenada_Y + punto_2.coordenada_Y);
    return punto;
  }

  res_Puntos(punto_1: Punto, punto_2: Punto): Punto {
    let punto: Punto = new Punto(punto_2.coordenada_X - punto_1.coordenada_X, punto_2.coordenada_Y - punto_1.coordenada_Y);
    return punto;
  }

  prod_Escalar(punto_1: Punto, valor: number): number {
    let resultado: number = ((punto_1.coordenada_X * valor) + (punto_1.coordenada_Y * valor));
    return resultado;
  }

  dist_Eucl(punto_1: Punto, punto_2: Punto): number {
    let primera_coordenada: number = (punto_1.coordenada_X - punto_2.coordenada_X) * (punto_1.coordenada_X - punto_2.coordenada_X);
    let segunda_coordenada: number = (punto_1.coordenada_Y - punto_2.coordenada_Y) * (punto_1.coordenada_Y - punto_2.coordenada_Y);
    return Math.sqrt( (primera_coordenada + segunda_coordenada) );
  }
}


