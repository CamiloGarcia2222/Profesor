// 1. Contar del 1 al 10
// Usa un bucle for para mostrar los números del 1 al 10 en consola.

for(let i = 1; i<=10; i++){
    console.log("Estamos en el numero "+ i);
}

// 2. Números pares del 1 al 20
// Imprime solo los números pares entre 1 y 20.

let numero1 = 0;

    for (let i=1; i<=20; i++){
        if(i % 2 === 0 ){
            console.log("El numero es  "+ i);  
        }
    }

// 3. Tabla de multiplicar del 5
// Muestra la tabla del 5 del 1 al 10 (ej. "5 x 1 = 5", ...).

let tabla = 5;

for (let i=1; i<=10; i++){
    console.log( tabla + " x " + i + " = " + (tabla * i));
}

// 4. Suma de los primeros 100 números
// Usa un bucle for para sumar del 1 al 100 y mostrar el resultado.

let suma = 0 ;

for(let j=0; j<=100; j++){
    suma += j;
}
console.log("La suma de los 100 numeros es de "+ suma);


// 5. Cuenta regresiva
// Imprime los números del 10 al 1 en orden descendente.


for(let g=10; g>0; g--){
    console.log("vamos por el numero "+ g);
}
