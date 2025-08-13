// 1. Número positivo, negativo o cero
// Declara una variable num. Usa if, else if, else para determinar si es positivo, negativo o cero.

let num = 0

if(num < 0){
    console.log("El numero es menor que 0");
    
}else if (num === 0){
    console.log("El numero es igual que 0 ");
}else{
    console.log("El numero es mayor que 0");
    
}

// 2. Mayor de dos números
// Declara dos números y muestra cuál es mayor (o si son iguales).
 let num1 = 15;
 let num2 = 37;

if(num1 > num2){
    console.log("El numero " + num1 + " es mayor que el "+ num2);
    
}else{
    console.log("El numero " + num2 + " es mayor que el "+ num1);
    
}

// 3. Edad mínima para conducir
// Pide la edad del usuario y determina si puede conducir (edad ≥ 18).

let edadUsuario = 17;

if(edadUsuario >= 18){
    console.log(" Puede conducir ");
    
}else {
    console.log("Lo sentimos no puede conducir")
}

// 4. Número par o impar
// Verifica si un número guardado en una variable es par o impar.

let numeroGuardado = 2;


if (numeroGuardado % 2 === 0){
    console.log("El numero " + numeroGuardado + " es par");
    
}else{
    console.log(" Es impar ");
    
}

// 5. Calificación
// Declara una variable con una nota (0 a 10). Usa if para mostrar:
// "Sobresaliente" si es mayor o igual a 9
// "Notable" si es ≥ 7
// "Aprobado" si es ≥ 5
// "Suspendido" si es menor de 5

let nota = 9;

if(nota >= 9){
    console.log(" Su nota es de "+ nota + "(Sobresaliente)");
}else if (nota >= 7){
    console.log(" Su nota es de "+ nota + "(Notable)");
}else if (nota >= 5){
    console.log(" Su nota es de "+ nota + "(Aprovado)");
}else{
    console.log("SUSPENDIDO");
    
}