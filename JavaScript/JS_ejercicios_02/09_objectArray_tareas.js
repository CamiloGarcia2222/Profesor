/*
Crea un objeto gestorTareas que permita añadir tareas, marcar tareas como completadas, y mostrar el estado.
*/

const gestorTareas = {
    tareas: [],

    agregarTareas(nombre){
        this.tareas.push({tarea: nombre, completada: false});
    },

    completarTarea(nombre){
        const tarea = this.tareas.find(t => t.tarea === nombre);
        if (tarea){
            tarea.completada = true;
        }
    },
    mostrarTareas(){
        this.tareas.forEach(t=>{
            console.log(`${t.tarea} - ${t.completada ? "completada" : "pendiente"}`);
        });
    }
}

gestorTareas.agregarTareas("Correr")
gestorTareas.agregarTareas("Estudiar")
gestorTareas.agregarTareas("Practicar baile")
gestorTareas.completarTarea("Correr")
gestorTareas.mostrarTareas()

