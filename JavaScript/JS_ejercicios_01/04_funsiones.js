//crear una funsion llamada mostrarParesEntreDosNumeros que resiva dos numeros como parametros y que muestre por pantalla los numeros pares comprendidos entre esos dos numeros 

function mostrarParesEntreDosNumeros(inicio, final){
    for(let i=inicio; i<=final; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

mostrarParesEntreDosNumeros (1,50)

