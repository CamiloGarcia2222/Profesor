//crear una funsion llamada mostrarParesEntreDosNumeros que resiva dos numeros como parametros y que muestre por pantalla los numeros pares comprendidos entre esos dos numeros 



function numerosPares(numeroMin, numeroMax){
    let guardarNumero = []
    for (let i=numeroMin; i<=numeroMax; i++){
        if (i % 2 === 0){
             guardarNumero.push(i)

        }
    }  
    return guardarNumero;
    }
 
 let numeroGuardados = numerosPares(1,100)
 console.log(numeroGuardados);
 

//modificar el codigo para en vez de mostrar por pantalla los valores,  genere una lista que tiene que devolver. Necesitas utilizar la funcion push() para lista