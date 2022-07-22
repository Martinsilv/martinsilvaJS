function Productos(codigoProductos, detalleProductos, costoProductos, stockProductos){
this.codigo = codigoProductos;
this.detalle = detalleProductos;
this.costo = costoProductos;
this.stock = stockProductos;

}
 
let remeraHombre = new Productos(000, "remera0 para Hombre", 900, 20);
let remeraMujer = new Productos(111, "remera para Mujer",1500, 5);
let camperaHombre = new Productos(222, "campera para Hombre",4000, 6);
let camperaMujer = new Productos(333, "campera para Mujer", 3500,10);
let camisetaFutbol = new Productos(444, "camiseta de futbol", 7000, 12);
let camisetaFutbolchicos = new Productos(555, "camiseta de futbol para chicos", 3000, 8);

const todosLosProductos = [remeraHombre, remeraMujer, camperaHombre, camperaMujer, camisetaFutbol, camisetaFutbolchicos];