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

## __Ejercicio - 6: Puntos bi-dimensionales__
En este ejercicio, hemos de representar con algún tipo de dato, un punto en el espacio de dos coordenadas,
esto es, en los ejes cartesianos, y se definirán las funciones necesarias para:

* Sumar y restas dos puntos coordenada a coordenada.
* Realizar el producto cartesiano entre un punto y un número.
* Calcular la distancia euclídea entre dos puntos.

En mi caso, he decidido declarar una clase, ya que me encuentro más familiarizado con el concepto, sin embargo también
se podría haber hecho uso de literales, aunque con una clase que represente a un punto, se pueden resolver los ejercicios
planteados.

```TypeScript
export class Punto {
  coordenada_X: number;
  coordenada_Y: number;

  constructor(coordenada_X: number, coordenada_Y: number) {
    this.coordenada_X = coordenada_X;
    this.coordenada_Y = coordenada_Y;
  }
```

Como vemos, la clase solamente necesita dos atributos, que son la coordenada X y la coordenada Y, así como el constructor
para inicializarlos.

Pasamos a comentar los métodos, la suma y la resta son prácticamente iguales, se realiza una operación coordenada a 
coordenada y se devulve un punto.

```
  sum_Puntos(punto_2: Punto): Punto {
    let punto: Punto = new Punto(this.coordenada_X + punto_2.coordenada_X, this.coordenada_Y + punto_2.coordenada_Y);
    return punto;
  }
  
    res_Puntos(punto_1: Punto): Punto {
    let punto: Punto = new Punto(this.coordenada_X - punto_1.coordenada_X, this.coordenada_Y - punto_1.coordenada_Y);
    return punto;
  }
```

Con la palabra reservada *this* estamos accediendo a los atributos del objeto que está llamando al método, luego creamos un punto
que tenga las coordenadas con las operaciones y lo retornamos. Algo parecido sucede en el producto escalar:

```
  prod_Escalar(valor: number): number {
    let resultado: number = ((this.coordenada_X * valor) + (this.coordenada_Y * valor));
    return resultado;
  }
```

Sin embargo, si nos fijamos, por la definición de producto escalar, se obtiene un valor numérico.

La distancia euclídea se rige por la siguiente [fórmula](https://es.wikipedia.org/wiki/Distancia_euclidiana):

[Imagen formula distancia euclidea](https://wikimedia.org/api/rest_v1/media/math/render/svg/92d49b1b717fc1b18de1b7bebddc78d56b9ac79c)

Aquí tenemos el código que lo resuelve:

```
  dist_Eucl(punto_2: Punto): number {
    let primera_coordenada: number = (this.coordenada_X - punto_2.coordenada_X) * (this.coordenada_X - punto_2.coordenada_X);
    let segunda_coordenada: number = (this.coordenada_Y - punto_2.coordenada_Y) * (this.coordenada_Y - punto_2.coordenada_Y);
    return Math.sqrt( (primera_coordenada + segunda_coordenada) );
  }
```
Podríamos haber utilizado *Math.pow*, sin embargo, también se puede realizar la multiplicación de un número por si mismo.

## __Ejercicio - 7: Puntos n-dimensionales__
Este ejercicio está emparejado con el anterior, se trata de crear algún tipo de dato que consiga representar un punto, sin 
embargo, esta clase de punto tendrá más de dos coordenadas, como mínimo 3, y como máximo las que el usuario indique.

Volvemos a crear una clase, sin embargo su comportamiento será algo diferente al de la clase *Punto*, la llamaremos *Punto_General*
y tendrá tres atributos sencillos que serán las coordenadas X, Y y Z, además tendrá un valor numérico como atributo que servirá
para determinar las dimensiones del punto en cuestión.

Por último, un vector de valores numéricos, que serán las coordenadas en sí, posteriores a las tres primeras, esto es, si el vector
tiene estos valores, [4,2,1] estaremos hablando de que la coordenada en la cuarta dimensión es 4, en la quinta dimensión toma el valor 1
y en la sexta dimensión, 1, por lo tanto, *dimensión* será igual a 6.

```
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
```

La suma y la resta se realizan de la misma forma, sin embargo, no sabemos las dimensiones a priori hasta que nos lo diga el usuario,
por lo tanto tenemos que iterar hasta alcanzar el tamaño del vector que recibimos, además, no podemos sumar o resta dos puntos, si no
tienen las mismas dimensiones.

```TypeScript
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
```

El producto escalar, también es bastante parecido al anterior, al de los puntos bidimensionales, aunque también hemos de tener
en cuenta el vector de coordenadas de las dimensiones:

```TypeScript
  prod_escalar(valor: number): number {
    let resultado_suma_coord: number = 0;

    let resultado: number = ( (this.coordenada_X * valor) + (this.coordenada_Y * valor) + (this.coordenada_Z * valor) );

    for (let indice = 0; indice < this.vector_coor_d.length; indice ++) {
      resultado_suma_coord += this.vector_coor_d[indice] * valor;
    }

    resultado += resultado_suma_coord;
    return resultado;
  }
```
Podemos resaltar un aspecto importante, podemos iterar hasta alcanzar el tamaño del vector de coordenadas, o hasta el valor de la resta
del atributo *dimensiones* y el valor de las coordenadas en el espacio tridimensional, 3.

En la distancia euclídea también comprobamos la veracidad de las dimensiones de ambos puntos, ya que insistimos que deben de ser las mismas.

```
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
```
Seguimos aplicando la misma fórmula, pero ya no para dos puntos de dos dimensiones, sino para dos puntos de n-dimensiones.

## __Ejercicio - 8: El Agente__
En este último ejercicio debemos calcular un camino entre dos puntos, que se encuentran en el espacio euclídeo, de dos dimensiones
y retornar el camino en forma de un vector de cadenas de caracteres.Para ello hemos de tener en cuenta:

* El punto inicial, o de partida.
* El punto final, o de destino.
* Los puntos máximos donde se podrán mover los puntos, esto es, un tablero
representado por X e Y.

La función recibe los puntos anteriores, además, podemos usar el tipo de dato anterior, *Punto*, del ejercicio 6, para representar
los puntos.

Otro aspecto importante, es que el agente, solo puede moverse en las cuatro direcciones posibles, norte, sur, este y oeste.
Por ejemplo, si se desplaza al norte, entonces añadimos al vector de salida, "north", y si por ejemplo, vamos al este, entonces
añadimos "east" al vector de salida.

Este sería un ejemplo de la ejecución del programa:

```TypeScript
initialPoint = (1, 3)
endPoint = (3, 5)
agent(X, Y, initialPoint, endPoint) // => [North, North, East, East]
```

La función que definimos recibe como parámetros lo dispuesto anteriormente:
```TypeScript
export function agent(punto_1: Punto, punto_2: Punto, tablero: Punto ): Array<string> | string 
```
Puede devolver un mensaje, en el caso de que ocurra algún tipo de error, o el vector de cadenas de caracteres.

Al comienzo de la función, hemos de comprobar si los puntos están "dentro" del tablero:
```TypeScript
  if ( (punto_1.coordenada_X <= tablero.coordenada_X) && (punto_2.coordenada_X <= tablero.coordenada_X) && (punto_1.coordenada_Y <= tablero.coordenada_Y) && (punto_2.coordenada_Y <= tablero.coordenada_Y) ) {
    console.log(`El tablero es suficiente, y los puntos son correctos, a continuación se mustra el camino\n`);
  } else {
    return 'Alguna de las coordenadas de los puntos es mayor que el tablero\n';
  }
```

Posteriormente pasamos a ir calculando la trayectoria, creamos un vector de cadenas de caracteres auxiliar y allí vamos
introduciendo los valores, realizamos una separación, para el eje X, podemos introducir los valores *East* o *West*, esto es,
que avanza a la derecha o a la izquierda:

Y tenemos que continuar hasta que alcanzamos a la coordenad X en el punto de destino.

```TypeScript
  let indice_X: number = punto_1.coordenada_X;
  /**
   * Bucle while, en este caso, comprobamos en la coordenada X, vamos
   * yendo a derecha o izquierda, segun sea el valor mayor o menor que el
   * punto 2, el punto auxiliar al punto 2
   */
  while (indice_X != punto_2.coordenada_X) {
    if (indice_X < punto_2.coordenada_X) {
      indice_X += 1;
      cadena_aux.push("East");
      // console.log(`${cadena_aux}`);
    }
    if (indice_X > punto_2.coordenada_X) {
      indice_X -= 1;
      cadena_aux.push("West");
      // console.log(`${cadena_aux}`);
    }
  }
  ```
  
  Lo mismo realizamos para el eje Y, solo que ahora los valores serán "North" o "South".
  
  ```TypeScript  
  let indice_Y: number = punto_1.coordenada_Y;

  while (indice_Y != punto_2.coordenada_Y) {
    if (indice_Y < punto_2.coordenada_Y) {
      indice_Y += 1;
      cadena_aux.push("North");
      // console.log(`${cadena_aux}`);
    }
    if (indice_Y > punto_2.coordenada_Y) {
      indice_Y -= 1;
      cadena_aux.push("South");
      // console.log(`${cadena_aux}`);
    }
  }
  
  ```
  
  Por último, retornamos el vector, de cadenas de caracteres.
  
  ## __Documentación con *TypeDoc*__
  
  ## __Desarrollo de pruebas con *Mocha* y *Chai*__
  
  ## __Conclusiones__
  
  ## __Bibliografía__
  
