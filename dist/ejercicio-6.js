"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
/**
 * Clase que representa un punto, tiene
 * como atributos las coordenadas X e Y
 */
class Punto {
    constructor(coordenada_X, coordenada_Y) {
        this.coordenada_X = coordenada_X;
        this.coordenada_Y = coordenada_Y;
    }
    /**
     * Suma de dos puntos
     * @param punto_2 recibe un punto
     * @returns devuelve un nuevo punto, con la suma
     */
    sum_Puntos(punto_2) {
        let punto = new Punto(this.coordenada_X + punto_2.coordenada_X, this.coordenada_Y + punto_2.coordenada_Y);
        return punto;
    }
    /**
     * Resta de dos puntos
     * @param punto_1 recibe un punto
     * @returns devuelve un nuevo punto, con la resta
     */
    res_Puntos(punto_1) {
        let punto = new Punto(this.coordenada_X - punto_1.coordenada_X, this.coordenada_Y - punto_1.coordenada_Y);
        return punto;
    }
    /**
     * Realiza el producto escalar entre un valor
     * y el punto que es el que llama a la función
     * @param valor valor numérico
     * @returns devuelve un valor numérico
     */
    prod_Escalar(valor) {
        let resultado = ((this.coordenada_X * valor) + (this.coordenada_Y * valor));
        return resultado;
    }
    /**
     * Calcula la distancia euclídea entre dos puntos, usa
     * la función sqrt de Math
     * @param punto_2 punto que se recibe
     * @returns resultado que se resuelve, es un valor numérico
     */
    dist_Eucl(punto_2) {
        let primera_coordenada = (this.coordenada_X - punto_2.coordenada_X) * (this.coordenada_X - punto_2.coordenada_X);
        let segunda_coordenada = (this.coordenada_Y - punto_2.coordenada_Y) * (this.coordenada_Y - punto_2.coordenada_Y);
        return Math.sqrt((primera_coordenada + segunda_coordenada));
    }
}
exports.Punto = Punto;
let punto_1 = new Punto(2, 6);
let punto_2 = new Punto(2, 4);
console.log(punto_1.sum_Puntos(punto_2));
console.log(punto_2.res_Puntos(punto_1));
console.log(punto_1.prod_Escalar(20));
console.log(punto_2.dist_Eucl(punto_1));
