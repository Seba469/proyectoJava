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

const disponible = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5]
const carro = []

let catalogo = 'Tenemos en stock: \n'

function agregarCarro (){

    for(item of disponible){
        catalogo += `\n ${item.id}- ${item.marca} ${item.nombre} por $${item.precio}`
    }

    catalogo += '\n\n Para finalizar la compra ingrese 99'

    let respuesta = parseInt(prompt(catalogo))

    while(isNaN(respuesta)){
        alert(`Solo puede ingresar numeros`)
        respuesta = parseInt(prompt(catalogo))
    }

    while(respuesta != 99){
        switch(respuesta){
            case 1:
                carro.push(disponible[0])
                alert(`Se agrego el carrito ${disponible[0].marca} ${disponible[0].nombre}`)
                break;
            case 2:
                carro.push(disponible[1])
                alert(`Se agrego el carrito ${disponible[1].marca} ${disponible[1].nombre}`)
                break;
            case 3:
                carro.push(disponible[2])
                alert(`Se agrego el carrito ${disponible[2].marca} ${disponible[2].nombre}`)
                break;
            case 4:
                carro.push(disponible[3])
                alert(`Se agrego el carrito ${disponible[3].marca} ${disponible[3].nombre}`)
                break;
            case 5:
                carro.push(disponible[4])
                alert(`Se agrego el carrito ${disponible[4].marca} ${disponible[4].nombre}`)
                break;
            default:
                    alert('Esa opcion no esta disponible')
        }
        respuesta = parseInt(prompt(catalogo))
    }
    alert('Se cerro tu pedido')
    mostrarCarro()
}

let zapatillaCarro = 'Vas a llevar'
let precioCarro = 0

function mostrarCarro(){
    for(itemElegido of carro){
        zapatillaCarro += `\n - ${itemElegido.marca} ${itemElegido.nombre}`
        precioCarro += itemElegido.precio
    }

    alert(`${zapatillaCarro} \n El total es: $${precioCarro}`)
}

agregarCarro()