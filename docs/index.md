# Desarrollo de Sistemas Informáticos
## Práctica 4 - Arrays, Tuplas y Enumerados
## Yago Pérez Molanes (alu0101254678@ull.edu.es)
__*Contenidos del informe*__

__*Pasos realizados para el desarrollo de la práctica*__

* Algunas tareas a realizar previamente: 
  * Aceptar la tarea asignada a [GitHub Classroom](https://classroom.github.com/assignment-invitations/2492c16064887c93b740ad3e6780e834/status)

## __Introducción y Objetivos__
En esta práctica resolveremos una serie de ejercicios relacionados con varios conceptos que resultan importantes al abordar
el lenguaje de programación TypeScript, estos son los arrays, las tuplas y los enumerados.

Comentaremos la resolución de los ejercicios propuestos, así como algunas herramientas que hemos utilizado, como la generación
de documentación, y las pruebas dirigidas de desarrollo.

## __Ejercicio - 1: Decodificar Resistencias__
En este ejercicio tenemos que crear una función que permita obtener los valores de las bandas de colores de una resistencia,
los colores son los que mostramos a continuación:

1.  Negro: 0
2.  Marrón: 1
3.  Rojo: 2
4.  Naranja: 3
5.  Amarillo: 4
6.  Verde: 5
7.  Azul: 6
8.  Violeta: 7
9.  Gris: 8
10. Blanco: 9

Así, en el caso de que, por ejemplo, tengamos una resistencia de color rojo y verde, sus valores serán de [2, 5], respectivamente.
La función recibe un vector de cadenas de caracteres, con los colores, aunque solo procesa los dos primeros, mientras que el resto los ignora.
Y devuelve dicha representación.

Debajo vemos el código de la función, observamos que si recibimos un único elemento del vector, o ninguno, ésta debería mostrar algo diferente,
y en el caso de que tengamos dos elementos o más, si que podemos devolver sus valores, hacemos uso de un vector auxiliar, en el que las posiciones
de los colores son sus valores reales.

```TypeScript
export function decodeResistor(_param: Array<string>): Array<number> | number {
  let vector_s: Array<string> = ["negro","marron","rojo","naranja","amarillo","verde","azul","violeta","gris","blanco"];
  let codigo_1: number = 0;
  let codigo_2: number = 0;
  let vector: Array<number> = [];
  if (_param.length === 0) {
    console.log(`Tienes que escribir los colores\n`);
    return -1;
  }
  if (_param.length === 1) {
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[0].includes(vector_s[indice])) {
        codigo_1 = indice;
      }
    } if (codigo_1 === 0) {
      console.log(`Tienes que escribir los colores\n`);
      return -1;
    } else {
      return codigo_1;
    }
  } else {
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[0].includes(vector_s[indice])) {
        codigo_1 = indice;
      }
    }
    for (let indice = 0; indice < vector_s.length; indice ++) {
      if (_param[1].includes(vector_s[indice])) {
        codigo_2 = indice;
      }
    }
    vector.push(codigo_1, codigo_2);
    return vector;
    /* if (codigo_1  === codigo_2 === 0) {
      // console.log(`Hola`);
      return -1;
    } else {
      vector.push(codigo_1, codigo_2);
      return vector;
    }*/
  }
}
```
La función pude devolver un número, en este caso será -1, porque no se ha escrito correctamente los colores, o un vector,
que contengan los valores codificados.

## __Ejercicio - 2: Palabras Encadenadas en un Array__
En este ejercicio, seguimos trabajando con vectores de caracteres, sin embargo, en esta ocasión, tendremos que comprobar cada uno 
de los valores "individuales", esto es, cada uno de los caracteres, de una posición individual del vector y del siguiente.

Se tiene que realizar de esta forma, porque queremos saber si varias palabras se enceuntran encadenadas, dentro de un vector, de cadenas
de caracteres, podemos entederlo mejor si observamos el siguiente ejemplo:

"Llamada a la función, con ['allow', 'lower', 'return']" -> Salida: ['lowr'];

Como vemos, tenemos que comprobar cada carácter de la posición anterior, con el carácter de inicio de la siguiente posición, lo 
podemos ver en el ejemplo:

1.  Comparamos 'w' con 'l'.
2.  Comparamos 'ow' con 'lo'.
3.  Comparamos 'low' con 'low'.

*Tenemos primera palabra encadenada, ahora hay que comprobar si la siguiente esta encadenada, siguiendo el mismo proceso*
Esto es lo que realiza la función, cuyo código mostramos a continuación:

```TypeScript
export function meshArray(vector: Array<string>) {
  let cadena_1_aux: string = "";
  let cadena_2_aux: string = "";
  if (vector.length === 0) {
    return "El vector está vacío";
  }
  if (vector.length === 1) {
    return "El vector contiene un elemento";
  }
  if (vector.length === 2) {
    let tamanio = vector[0].length;
    for (let indice: number = tamanio; indice > 0; indice --) {
      cadena_1_aux = vector[0][indice - 1] + cadena_1_aux;
      console.log(`${cadena_1_aux}`);
      if (vector[1].startsWith(cadena_1_aux) ) {
        return 'p';
      }
    }
    return 'q';
  }
  if (vector.length > 2) {
    let centinela: boolean = true;
    let cadena_entera = "";
    let contador_negativo: number = 0
    for (let indice = 0; indice < vector.length; indice ++) {
      let tamanio: number = vector[indice].length;
      // console.log(`${tamanio}`);
      for (let indice_1: number = tamanio; indice_1 > 0; indice_1 --) {
        cadena_1_aux = vector[indice][indice_1 - 1] + cadena_1_aux;
        // console.log(`${cadena_1_aux}`);
        if (vector[indice + 1]) {
          if (vector[indice + 1].startsWith(cadena_1_aux) ) {
            cadena_entera += cadena_1_aux;
          } else {
            contador_negativo += 1;
            // console.log(`${contador_negativo}`);
          }
        }
        // console.log(`${cadena_entera}`);
      }
      if (contador_negativo === vector[indice].length ) {
        return "Error de concatenación\n";
      } else {
        contador_negativo = 0;
      }
      cadena_1_aux = '';
    }
    return cadena_entera;
  }
}
```

## __Ejercicio - 3: Calcular la media y concatenar cadenas__
En este ejercicio disponemos de un vector que contiene tanto cadenas de caracteres como valores numéricos, y necesitamos
calcular la media de sus valores numéricos, y concatenar todos los caracteres que lo forman, y devolverlo como un vector.

Por lo tanto, tenemos que "diferenciar" en el vector, o "filtrar", por los valores numéricos, eso es lo que hacemos en la función,
y calculamos la media de ellos.

Para la parte de string, nos preguntamos si, individualmente, un elemento de un vector, es decir, una posición, 0, 1, 2...
es un tipo de dato string.

Una vez que tenemos ambos valores, la concatenación de caracteres, y la media, los devolvemos como un vector, como en la siguiente 
función:

```TypeScript
export function meanAndConcatenate(vector: Array<number | string>) {
  let values: Array<number> = vector.filter(Number) as Array<number>;
  let resultado: number = 0;
  let contador: number = 0;

  for (let indice: number = 0; indice < values.length; indice ++) {
    resultado += values[indice];
    contador += 1;
  }
  // console.log(`${resultado}/${contador} = ${resultado/contador}`);

  let cadena: Array<string | number> = [];

  for (let indice: number = 0; indice < vector.length; indice ++) {
    if (typeof(vector[indice]) === 'string') {
      cadena.push(vector[indice]);
    }
  }

  // console.log(`${cadena}`);
  // console.log(cadena.join(''));

  let final: Array<number | string> = [];
  return (final.concat((resultado/contador), cadena.join('')));
}
```
## __Ejercicio - 4: Mover los Ceros al Final__
En este ejercicio, disponemos de un vector de números, que contiene valores nulos, esto es, ceros, entonces
debemos mover estos valores al final del vector, sin modificar previamente los que ya estaban

Por ejemplo, supongamos que tenemos el siguiente vector:

[1, 4, 5, 0, 3, 2, 0] -> llamamos a la función, y ¿qué nos devuelve? -> [1, 4, 5, 3, 2, 0, 0]

La función a la que llamamos, nos devolvería ese resultado, en el siguiente código, en el que hemos creado dicha función,
hacemos uso de un vecor auxiliar, y contamos los ceros del vector orignal, y luego los "insertamos" al final del vector auxiliar.

```TypeScript
export function moveZeros(vector: Array<number>): Array<number> {
  let vector_aux: Array<number> = [];
  let contador: number = 0;
  for (let indice: number = 0; indice < vector.length; indice ++) {
    if (vector[indice] != 0) {
      vector_aux.push(vector[indice]);
    }
    if (vector[indice] === 0) {
      contador += 1;
    }
  }
  if (contador != 0) {
    for (let indice: number = 0; indice < contador; indice ++) {
      vector_aux.push(0);
    }
  }
  return vector_aux;
}
````

## __Ejercicio - 5: Factoría de Multiplicaciones__
En este problema, tenemos un vector de valores numéricos, y un valor que recibe como parámetro, esta función tiene que 
"llamar" a otra función enviándole otro vector, sin modificar el original, y el mismo valor anterior, y la función "llamada"
lo que hará será multiplicar cada una de las posiciones del vector por el valor numérico.

Por último la segunda función retornará el vector resultante.

Esta función realiza el producto del valor por cada una de las posiciones del vector.
```
export function escalar(vector_auxiliar: Array<number>, valor: number) {
  let vector_def: Array<number> = [];
  for (let indice = 0; indice < vector_auxiliar.length; indice ++) {
    vector_auxiliar[indice] = vector_auxiliar[indice] * valor;
    vector_def.push(vector_auxiliar[indice]);
    // console.log(`${vector_auxiliar}`);
  }
  return vector_def;
}
```
Esta fución, es la que llama a la función, como vemos creamos unve vector auxiliar, al que igualamos
al vector original, y el valor lo mantenemos.
```
export function multiplyAll(vector: Array<number>, valor: number):Array<number> {
  let vector_auxiliar: Array<number> = vector;
  // console.log(`${vector_auxiliar}`);

  let vector_resultado: Array<number> = escalar(vector_auxiliar, valor);
  return vector_resultado;
}
```
