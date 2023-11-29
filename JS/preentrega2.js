
//*******************************************  App pedido comidas  *********************************************

let cantidadFact = 0
let cantidadTorta = 0
let cantidadSang = 0

let cantidadExpresso = 0
let cantidadFlat = 0
let cantidadLatte = 0

let carrito = []

let arrayComida =[  {id:1, producto: "FACTURA", precio: 500, stock: 100},
                    {id:2, producto: "CHIPA", precio: 500, stock: 88},
                    {id:3, producto: "SANDWWICH DE MIGA", precio: 500, stock: 65},
                    {id:4, producto: "CROISSANT", precio: 500, stock: 50},
                    {id:5, producto: "TORTA", precio: 500, stock: 95},
                    {id:6, producto: "ROLL DE CANELA", precio: 500, stock: 46},
                ]

let arrayCafe = [   {id:1, producto: "FLAT WHITE", precio: 1500, stock: 100},
                    {id:1, producto: "AMERICANO", precio: 1500, stock: 50},
                    {id:1, producto: "ESPRESSO", precio: 1500, stock: 64},
                    {id:1, producto: "LUNGO", precio: 1500, stock: 79},
                    {id:1, producto: "CAPUCCINO", precio: 1500, stock: 42}
                ]

class Cliente{
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.pedido = 0
        this.gustoComida = ""
        
    }

    buscarProducto(gusto){
                if (gusto.toLowerCase() === "comida") {
                    return arrayComida.find((comida) => comida.producto.includes(this.gustoComida))
                } else {
                    return arrayCafe.find ((cafe) => cafe.producto.includes(this.gustoComida))
                }
    }

    ingresar() {
        let bienvenido = prompt(`Bienvenido ${this.nombre}. Desea comprar? SI/NO`).trim()
        while (bienvenido.toUpperCase() === "SI"){
                let gusto = prompt (`Hay ganas de: Comida/Cafe`).trim()
                    if (gusto.toLowerCase() === "comida"){
                    this.gustoComida = prompt(`Seleccione el producto que le gusta: Factura/Torta/Sandwich de Miga/Croissant/Torta/Roll de canela`).toUpperCase()
                    } else {
                    this.gustoComida = prompt (`Seleccione cafe: Flat White/Americano/Espresso/Americano/Lungo`).toUpperCase()
                    }
                    let comidaSeleccionada = this.buscarProducto(gusto)
                    
                    let cantidad = prompt (`Ingrese la cantidad`)
                    let precioTotal = comidaSeleccionada.precio * parseInt(cantidad)
                    comidaSeleccionada.stock -= cantidad 
                    carrito.push({producto: comidaSeleccionada.producto, precio: precioTotal, cantidad: cantidad})    
                    
                    bienvenido = prompt(`${this.nombre}, Desea seguir comprando? SI/NO`)  
        } 
        
        alert (`Tu compra es ${carrito.map((producto,i) => `${i+1}. ${producto.cantidad} ${producto.producto}`)},
        Sera enviado a la direccion: ${this.direccion}`)
        alert (`Por un total de ${carrito.reduce((acumulador, precio) =>acumulador + precio.precio, 0)}`) *///* no me sale el reduce() */
        console.log(carrito);
        alert (`Vuelva prontos`)
        }      
            
    }

const CLIENTE1 = new Cliente (prompt(`ingrese nombre`), prompt(`ingrese direccion`))
CLIENTE1.ingresar()




