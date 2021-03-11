declare class Punto {
    coordenada_X: number;
    coordenada_Y: number;
    constructor(coordenada_X: number, coordenada_Y: number);
    sum_Puntos(punto_1: Punto, punto_2: Punto): Punto;
    res_Puntos(punto_1: Punto, punto_2: Punto): Punto;
    prod_Escalar(punto_1: Punto, valor: number): number;
    dist_Eucl(punto_1: Punto, punto_2: Punto): number;
}
