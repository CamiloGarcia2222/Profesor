/*
Ejercicio 4: Calculadora
Crea funciones separadas para sumar, restar, multiplicar y dividir dos números. 
Luego crea una función calculadora(operacion, a, b) que use las funciones anteriores según el tipo de operación.
Operación será un string con el símbolo de la operación: "+", "-", "*", "/".
En la division, si el segundo número es 0, la función debe devolver "Error: División por cero".
Realiza una serie de llamadas a la función calculadora para probar su funcionamiento.
*/

function sumar (a, b){
    return a + b;
}
function restar (a, b){
    return a - b;
}
function multiplicar (a, b){
    return a * b;
}
function dividir (a, b){
    if(b === 0){
        return "ERROR NO SE PUEDE DIVIDIUR POR 0"
    }
    return a / b;
}

function calculadora(operacion, a, b){
    if(operacion === "+"){
        return sumar (a, b)
    }
    else if (operacion === "-"){
        return restar (a, b)
    }
     else if (operacion === "*"){
        return multiplicar (a, b)
    }
     else if (operacion === "/"){
        return dividir (a, b)
    }
}