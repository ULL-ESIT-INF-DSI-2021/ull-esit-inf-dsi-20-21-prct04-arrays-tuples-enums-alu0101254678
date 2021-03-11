"use strict";
class Punto {
    constructor(coordenada_X, coordenada_Y) {
        this.coordenada_X = coordenada_X;
        this.coordenada_Y = coordenada_Y;
    }
    sum_Puntos(punto_1, punto_2) {
        let punto = new Punto(punto_1.coordenada_X + punto_2.coordenada_X, punto_1.coordenada_Y + punto_2.coordenada_Y);
        return punto;
    }
    res_Puntos(punto_1, punto_2) {
        let punto = new Punto(punto_2.coordenada_X - punto_1.coordenada_X, punto_2.coordenada_Y - punto_1.coordenada_Y);
        return punto;
    }
    prod_Escalar(punto_1, valor) {
        let resultado = ((punto_1.coordenada_X * valor) + (punto_1.coordenada_Y * valor));
        return resultado;
    }
    dist_Eucl(punto_1, punto_2) {
        let primera_coordenada = (punto_1.coordenada_X - punto_2.coordenada_X) * (punto_1.coordenada_X - punto_2.coordenada_X);
        let segunda_coordenada = (punto_1.coordenada_Y - punto_2.coordenada_Y) * (punto_1.coordenada_Y - punto_2.coordenada_Y);
        return Math.sqrt((primera_coordenada + segunda_coordenada));
    }
}
