//crear una funsion llamada mostrarParesEntreDosNumeros que resiva dos numeros como parametros y que muestre por pantalla los numeros pares comprendidos entre esos dos numeros 



function mostrarParesEntreDosNumeros(inicio, final){
    let GuardaNumeroDePares = []
    for(let i=inicio; i<=final; i++){
        if(i % 2 === 0){
            GuardaNumeroDePares.push(i);
        }
    }
    return GuardaNumeroDePares;
   
}

 let pares = mostrarParesEntreDosNumeros (20,40)
 console.log(pares);
 

//modificar el codigo para en vez de mostrar por pantalla los valores,  genere una lista que tiene que devolver. Necesitas utilizar la funcion push() para lista