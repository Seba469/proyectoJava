class Zapatilla{        
    constructor(id, marca, nombre, precio, stock){
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const zapatilla1 = new Zapatilla(0, 'puma', 'incinerate', 1500, 15)
const zapatilla2 = new Zapatilla(0, 'nike', 'airmax', 2000, 10)
const zapatilla3 = new Zapatilla(0, 'nike', 'vapormax', 2500, 8)
const zapatilla4 = new Zapatilla(0, 'adidas', 'supernova', 1300, 20)
const zapatilla5 = new Zapatilla(0, 'adidas', 'coreracer', 1800, 20)

const stockZapatilla = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5]
let marcaSeleccionada = []
const carro = []


function filtro (){
    let filtroMarca = parseInt(prompt('Ingrese la marca de zapatillas que busca \n 1- Nike \n 2- Adidas \n 3- Puma'))
    let i
    
    switch(filtroMarca){
        case 1:
            marcaSeleccionada = stockZapatilla.filter(element => element.marca === 'nike')

            for (i = 0; i < marcaSeleccionada.length; i++){
                marcaSeleccionada[i].id = i+1
                console.log(marcaSeleccionada[i])
            }

            break;
        case 2:
            marcaSeleccionada = stockZapatilla.filter(element => element.marca === 'adidas')

            for (i = 0; i < marcaSeleccionada.length; i++){
                marcaSeleccionada[i].id = i+1
                console.log(marcaSeleccionada[i])
            }

            break;
        case 3:
            marcaSeleccionada = stockZapatilla.filter(element => element.marca === 'puma')

            for (i = 0; i < marcaSeleccionada.length; i++){
                marcaSeleccionada[i].id = i+1
                console.log(marcaSeleccionada[i])
            }

            break;
        default:
            alert('Esa opcion no esta disponible')
            break;
    }
}

filtro()
let catalogo = 'Tenemos en stock: \n'


function agregarCarro (){

    for(item of marcaSeleccionada){
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
                carro.push(marcaSeleccionada[0])
                alert(`Se agrego el carrito ${marcaSeleccionada[0].marca} ${marcaSeleccionada[0].nombre}`)
                break;
            case 2:
                carro.push(marcaSeleccionada[1])
                alert(`Se agrego el carrito ${marcaSeleccionada[1].marca} ${marcaSeleccionada[1].nombre}`)
                break;
            default:
                alert('Esa opcion no esta disponible')
                break;
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