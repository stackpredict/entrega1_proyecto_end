class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    sumarIva() {
        return this.precio *1.21;
    }
    vender() {
        this.disponible = false;
    }
    precioSugerido() {
        return this.precio *1.21 *1.25;
    }


}
let arrayProductos = [];
do{
    const comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    }else{
        nombreP = comprobacion;
        let precioP = prompt("Ingrese el precio del producto");
        let detalleP = prompt("Ingrese el detalle del producto");
        let cantidadP = prompt("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP,cantidadP));

    }

}
while ( comprobacion != "fin" || comprobacion != "FIN" ||comprobacion != "Fin")
console.log(arrayProductos);

//document.write("<h3> El precio de costo del producto a calcular es: "+precioCostoM+" </h3>")

for (let producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad+ "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>Precio con IVA es: " + producto.sumarIva() + "</h3></li></ul><br>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
}

//  Poco Stock - Menos de 3 Productos

let pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
console.log("Productos con Poco stock, comprar nuevamente: ");
console.log(pocoStock);
document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>");

for (const producto of pocoStock) {
    document.write("<ul><li><h3>Nombre " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad " + producto.cantidad + "</h3></li></ul><br>");
}

// productos Sin Stock

let sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);


document.write("<h3> Lista de productos sin Stock (cantidad = 0 o disponible = False): </h3>");
for (const producto of sinStock) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Nombre: " + producto.nombre + "</h3></li></ul><br>");

}
// Buscar un producto específico por nombre Ingresado
const ingresado = prompt("Ingresar el producto que quiero buscar");
const prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

for (let producto of prodIngresado) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");
}
// Ordenados por Cantidad

let ordenadosCantidad = []; 
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b) {
    return a.cantidsd - b.cantidad;

});
console.log("Ordenados por cantidad Ascendente");
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos Ordenados por cantidad: </h3>");

for (let producto of ordenadosCantidad) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "  + producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>");

}
//Ordenados por Precio
const ordenadosPrecio = [];
// Declaramos el array ordenadosCantidad en una nueva posición de memoria
ordenadosPrecio = arrayProductos.map(elemento => elemento);
const ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log( "Ordenados por Precios Ascendentes");
console.log(ordenadosPrecio);
document.write("<h3> lista de Productos Ordenados por precio Ascendente: </h3>");

for (let producto of ordenadosPrecio) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");

}

    






