/*class Cliente {
    constructor(nombre, email, telefono, productosComprados) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.productosComprados = productosComprados;
    };
};*/

const traerProductos = () => {
    fetch('./json/datos.json')
    .then(datos => datos.json())
    .then(productos => console.log(productos))
}
traerProductos()