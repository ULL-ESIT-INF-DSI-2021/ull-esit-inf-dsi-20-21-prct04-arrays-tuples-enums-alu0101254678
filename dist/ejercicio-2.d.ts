/**
 * Calcula si un vector con cadenas de caracteres está
 * encadenado o no, la última letra o las anteriores
 * de la anterior cadena, deben coincidir con los caracteres
 * del principio de la siguiente cadena.
 * siguiente cadena
 * @param vector un vector de cadenas de caracteres
 * @returns las palabras encadenadas, o un mensaje de error
 * Ejemplo de uso:
 * ```
 * console.log(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])); -> correcto
 * console.log(meshArray(['allow', 'lowering', 'ringmaster', 'e'])); -> error
 * ```
 */
export declare function meshArray(vector: Array<string>): string | undefined;
