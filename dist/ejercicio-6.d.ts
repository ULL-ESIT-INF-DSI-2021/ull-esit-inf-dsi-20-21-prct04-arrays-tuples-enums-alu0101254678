/**
 * Clase que representa un punto, tiene
 * como atributos las coordenadas X e Y
 */
export declare class Punto {
    coordenada_X: number;
    coordenada_Y: number;
    constructor(coordenada_X: number, coordenada_Y: number);
    /**
     * Suma de dos puntos
     * @param punto_2 recibe un punto
     * @returns devuelve un nuevo punto, con la suma
     */
    sum_Puntos(punto_2: Punto): Punto;
    /**
     * Resta de dos puntos
     * @param punto_1 recibe un punto
     * @returns devuelve un nuevo punto, con la resta
     */
    res_Puntos(punto_1: Punto): Punto;
    /**
     * Realiza el producto escalar entre un valor
     * y el punto que es el que llama a la función
     * @param valor valor numérico
     * @returns devuelve un valor numérico
     */
    prod_Escalar(valor: number): number;
    /**
     * Calcula la distancia euclídea entre dos puntos, usa
     * la función sqrt de Math
     * @param punto_2 punto que se recibe
     * @returns resultado que se resuelve, es un valor numérico
     */
    dist_Eucl(punto_2: Punto): number;
}
