// 1. Suma de dos números
// Crea dos variables a y b, asígnales valores numéricos y muestra la suma de ambas por consola.
let numeroUno = 15;
let numeroDos = 33;

let resultado = numeroUno + numeroDos;
console.log("La suma de los dos números es: " + resultado);

// ------------------------------------------------------------

// 2. Intercambiar valores
// Crea dos variables x e y con valores distintos. Intercambia sus valores utilizando una variable temporal.
let x = 10;
let y = 15;

let temp = x;
x = y;
y = temp;

console.log("Nuevo valor de x: " + x);
console.log("Nuevo valor de y: " + y);

// ------------------------------------------------------------

// 3. Concatenar nombre y apellido
// Declara dos variables: nombre y apellido. Crea una tercera variable que almacene el nombre completo. Muéstralo por consola.
let nombre = "Christian Camilo";
let apellido = "Garcia Acevedo";

let nombreCompleto = nombre + " " + apellido;
console.log("Mi nombre completo es: " + nombreCompleto);

// ------------------------------------------------------------

// 4. Área de un rectángulo
// Declara dos variables: base y altura. Calcula y muestra el área del rectángulo (base * altura).
let base = 10;
let altura = 15;

let areaRectangulo = base * altura;
console.log("El área de nuestro rectángulo es: " + areaRectangulo);

// ------------------------------------------------------------

// 5. Conversión de grados Celsius a Fahrenheit
// Declara una variable con una temperatura en grados Celsius. Convierte y muestra el resultado en Fahrenheit.
// Fórmula: F = (C * 9/5) + 32
let gradosCelsius = 35;

let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
console.log("La temperatura en Fahrenheit es: " + gradosFahrenheit);

