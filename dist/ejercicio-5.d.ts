/**
 * Calcula el producto entre un vector y un valor numérico, y
 * devuelve un vector con el producto realzado en cada posición
 * @param vector_auxiliar vector que se recibe de la otra función
 * @param valor valor que se usa para multiplicar
 * Ejemplo de uso:
 * ```
 * multiplyAll([2, 6, 8], 3); -> [6,18,24]
 * ```
 */
export declare function escalar(vector_auxiliar: Array<number>, valor: number): number[];
/**
 * Función que recibe un vector y un valor, e iguala
 * el valor del vector a otro auxiliar y se lo pasa
 * a otra función
 * @param vector un vector numérico
 * @param valor un valor numérico
 */
export declare function multiplyAll(vector: Array<number>, valor: number): Array<number>;
