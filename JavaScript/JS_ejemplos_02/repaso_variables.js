let listaCadenas = ["fernando", "Rubio", 34]
console.log("El primer apellido es " + listaCadenas[1]);


let objetoPersona = {
    primerApellio: "Rubio",
    nombrePersona: "fernando ",
    edad: 34,
    direccion:{
        calle: "Campo",
        numero: 31,
    },
    coche:{
        modelo: "Almera",
        marca: "Nissan",
        imprimirDatosDelCoche: function(){
            console.log(`Datos del coche: ${this.marca}`);
        }

    },
    notasCursoDesarrollo: [10, 6, 11],

    saludar: function(){
        console.log(`Hola ${this.nombrePersona}${this.primerApellio}`);
    }
}

console.log(`El primer apellido es ${objetoPersona.primerApellio}`);
console.log(`La marca del coche ${objetoPersona.coche.marca}`);

console.log(`La nota del segundo examen es ${objetoPersona.notasCursoDesarrollo[0]}`);

objetoPersona.saludar()

//modificar el valor de un atributo o propiedad de un objeto

objetoPersona.primerApellio = "Garcia"
objetoPersona.saludar();

//añadir nuevas propiedades
objetoPersona.estadoCivil = "soltero";
console.log(objetoPersona.estadoCivil);




