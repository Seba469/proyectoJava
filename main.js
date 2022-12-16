/*class Cliente {
    constructor(nombre, email, telefono, productosComprados) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.productosComprados = productosComprados;
    };
};*/
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const divCatalogo = document.getElementById('catalogo')

fetch('./json/datos.json')
.then(data => data.json())
.then(productos => cargarProducto(productos))

function cargarProducto(productos){

    productos.forEach(producto => {
        divCatalogo.innerHTML +=
         `
        <div class="card col-9" style="width: 18rem;">
            <img src="./img/${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.autor}</p>
                <p class="card-text">$${producto.precio}</p>
                <button id="${producto.id}" class="btn btn-primary">Agregar al carro</button>
            </div>
        </div>  
        `
    })

    let btnAgregar = document.querySelectorAll('.btn-primary')

    btnAgregar.forEach(boton => {
        boton.onclick = () =>{
            const productoSeleccionado = productos.find(prod =>prod.id === parseInt(boton.id))

            const productoCarrito = {...productoSeleccionado, cantidad:1}
    
            const indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)
            if (indexCarrito === -1){
                carrito.push(productoCarrito)
            }else{
                carrito[indexCarrito].cantidad ++
            }
    
            localStorage.setItem('carrito',JSON.stringify(carrito))
            console.log(carrito)

            Swal.fire({
                position: 'bottom-end',
                title: 'Se agrego al carrito: ',
                text: `${productoSeleccionado.nombre}`,
                showConfirmButton: false,
                timer: 1300
              })
        }
    })

    carro()
}

function carro (){
    const btnCarrito = document.getElementById('btnCarrito')

    
    btnCarrito.forEach(boton => {
        boton.onclick = () =>{
            boton.toggle()
        }
    })

}

cargarProducto(productos)





