// ejercicio donde, utilizando el DOM, se crea una tabla con los productos de un carrito

// objeto carrito
let carrito = {
  productos: [
    { nombre: "libro", precio: 20 },
    { nombre: "bicicleta", precio: 150 },
  ],
  agregarProducto: function (nombre, precio) {
    let productoNuevo = {
      nombre,
      precio,
    };
    this.productos.push(productoNuevo);
  },


  calcularTotal: function (total) {
    total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio;
    }
    console.log(`el total de mi carrito es ${total}`);
  },
  
  mostrarProductos: function () {
    let tablaProductos = document.getElementById("tabla-productos");
    let tabla = document.createElement("table");

    // Construir el HTML completo de la tabla
    let html = `
        <thead>
            <tr>
                <th>nombre</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < this.productos.length; i++) {
      html += `
             <tr>
          <td>${this.productos[i].nombre}</td>
           <td>${this.productos[i].precio}</td>
        </tr>`;
    }
    html += `</tbody>`;
    tabla.innerHTML = html;
    tablaProductos.appendChild(tabla);
  },
};

carrito.agregarProducto("Libro", 15);
carrito.agregarProducto("Lápiz", 2);
carrito.agregarProducto("Cuaderno", 5);
carrito.agregarProducto("Borrador", 1);
carrito.agregarProducto("Regla", 3);

carrito.calcularTotal();
carrito.mostrarProductos();
