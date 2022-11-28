// Creacion de productos
class Zapatilla{        
    constructor(id, marca, nombre, precio, stock){
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const zapatilla1 = new Zapatilla(1, 'puma', 'incinerate', 1500, 15)
const zapatilla2 = new Zapatilla(2, 'nike', 'airmax', 2000, 10)
const zapatilla3 = new Zapatilla(3, 'nike', 'vapormax', 2500, 8)
const zapatilla4 = new Zapatilla(4, 'adidas', 'supernova', 1300, 20)
const zapatilla5 = new Zapatilla(5, 'adidas', 'coreracer', 1800, 20)

const stockZapatilla = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5]

const divCartaProducto = document.getElementById('cartaProducto')

stockZapatilla.forEach(producto =>{
    divCartaProducto.innerHTML += 
    `
    <div id="${producto.id}" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${producto.marca} - ${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button id="${producto.id}" class="btn btn-primary">Agregar al carro</button>
        </div>
    </div>    
    `
})

// Carrito de compras
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carrito)
const botonAgregar = document.querySelectorAll('.btn-primary')

botonAgregar.forEach(boton =>{
    boton.onclick = () =>{
        const productoSeleccionado = stockZapatilla.find(producto =>producto.id === parseInt(boton.id))

        const productoCarrito = {...productoSeleccionado, cantidad:1}

        const indexCarrito = carrito.findIndex(producto => producto.id === productoCarrito.id)
        if (indexCarrito === -1){
            carrito.push(productoCarrito)
        }else{
            carrito[indexCarrito].cantidad ++
        }

        localStorage.setItem('carrito',JSON.stringify(carrito))
    }
}) 

const botonFinalizar = document.getElementById('botonFinalizar')

botonFinalizar.onclick = () =>{
    const carritoFinal = carrito.map (producto => producto.precio * producto.cantidad)
    let costo = 0
    let total = 'Vas a llevar'
    carritoFinal.forEach (valor => {
        costo += valor
    })

    for(itemElegido of carrito){
        total += `\n - ${itemElegido.marca} ${itemElegido.nombre}`
    }

    alert(`${total} \n El total es: $${costo}`)
}
