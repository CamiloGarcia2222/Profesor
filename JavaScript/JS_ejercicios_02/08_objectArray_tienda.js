/*
Crea un objeto carrito que tenga un array de productos y métodos para agregarProducto(nombre, precio), calcularTotal() y mostrarProductos().
*/
let carrito = {
    productos : [
        {nombre: "libro", precio: 20},
        {nombre: "bicicleta", precio: 150},
    ],
    agregarProducto: function(nombre, precio){
        let productoNuevo = {
            nombre,
            precio,
        }
        this.productos.push(productoNuevo) 
    },
    calcularTotal: function(total){
        total = 0
        for(let i=0; i < this.productos.length; i++){
            total += this.productos[i].precio
        }
        console.log(`el total de mi carrito es ${total}`);
        
    },
    mostrarProductos: function(){
        let tablaProductos = document.getElementById("tabla-productos");

    


    
      tabla.innerHTML = `
        <thead>
            <tr>
                <th>nombre</th>
                <th>Precio</th>
            </tr>
        </thead>
      `;
      tabla.innerHTML =`
      <tbody>
       

      `
    

        for(let i=0; i<this.productos.length; i++){
            tabla.innerHTML += `
             <tr>
          <td>${this.productos[i].nombre}</td>
           <td>${this.productos[i].precio}</td>
        </tr>`
       
    }
    tabla.innerHTML += `</tbody>`
    tablaProductos.appendChild(tabla);
    }
}


carrito.agregarProducto("pelota", 10)
carrito.agregarProducto("escoba", 10)
carrito.calcularTotal()
carrito.mostrarProductos()

console.log(carrito.calcularTotal());  
carrito.agregarProducto("")         
// 190
// carrito.mostrarProductos()
// Producto: libro, Precio: 20
// Producto: bicicleta, Precio: 150
// Producto: pelota, Precio: 10
// Producto: escoba, Precio: 10

