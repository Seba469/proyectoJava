class Banco{        //Informacion de los bancos
    constructor(id, nombre, interesA12, interesA24, interesA36){
        this.id = id
        this.nombre = nombre
        this.interesA12 = interesA12
        this.interesA24 = interesA24
        this.interesA36 = interesA36
    }
}

const banco1 = new Banco(1, 'brou', 10, 15, 20)
const banco2 = new Banco(2, 'santander', 8, 16, 24)
const banco3 = new Banco(3, 'itau', 13, 19, 25)

console.log(banco1, banco2, banco3)

let opcion = parseInt(prompt('Ingrese el numero del banco que desea. 1- BROU | 2- Santander | 3- Itau'))

let condicion = false
let infoOpcion

while(condicion === false){ //se repite hasta q ingrese un valor correcto
    if (opcion === banco1.id){
        condicion = true
        infoOpcion = banco1
    }else if (opcion === banco2.id){
        condicion = true
        infoOpcion = banco2
    }else if (opcion === banco3.id){
        condicion = true
        infoOpcion = banco3
    }else{
        alert('El valor ingressado es incorrecto, intente nuevamente')
        let opcion = parseInt(prompt('Ingrese el numero del banco que desea. 1- BROU | 2- Santander | 3- Itau'))
    }
}

//console.log(infoOpcion)

let valorPrestamo = parseInt(prompt('Ingrese el monto de su prestamo'))

const costo = (valor, intereses, meses) =>{ //funcion para calcular cuota 
    const calculo = (valor+((valor*intereses)/100))/meses
    return calculo
}

const cuotaA12 = costo(valorPrestamo, infoOpcion.interesA12, 12)
const cuotaA24 = costo(valorPrestamo, infoOpcion.interesA24, 24)
const cuotaA36 = costo(valorPrestamo, infoOpcion.interesA36, 36)

//console.log(cuotaA12)

alert('El banco '+ infoOpcion.nombre +' le ofrece cuotas mensuales a 12 meses de '+ cuotaA12 +', a 24 meses de '+ cuotaA24 +' y a 36 meses de '+ cuotaA36)