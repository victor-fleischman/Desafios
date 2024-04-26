let nombreProducto = "papas";
let precioUnitario = 500;
let cantidadDeseada = prompt(`¿Cuantos kilos de ${nombreProducto} quiere comprar?`)
let descuentos;
let totalCompra = precioUnitario * cantidadDeseada;

if(cantidadDeseada >= 5)
    alert(`¡Obtienes un descuento del 10% por la compra de 5 o más kilos!`)
    descuentos = totalCompra * 10 / 100;
    totalCompra = totalCompra - descuentos;

alert(`Usted compró ${cantidadDeseada} kilos de ${nombreProducto}, el costo total de su compra es de: ${totalCompra}`)