// Proyecto 1er Pre-Entrega
//***************************************  Quiz de los simpsons  ***********************************************

/* function btnSaludar(nombre){
    alert (`Bienvenido ${nombre.toUpperCase()} al Simpsons quiz!`)
}

const PRIMER_PREGUNTA = "Quien es el padre de la familia Simpsons?"
const PRIMER_RESPUESTA = "HOMERO"

const SEGUNDA_PREGUNTA = "A quien descubren robando un videojuego de una tienda?"
const SEGUNDA_RESPUESTA = "BART"

const TERCER_PREGUNTA = "Quien es el/la mas inteligente de la familia simpsons?" 
const TERCER_RESPUESTA = "LISA"

let puntos = 0;
let preguntas = 3;

let preguntasRealizadas = 0;

function btnJugar(){
    while (preguntas > preguntasRealizadas){
        
        let respuesta = prompt(`Primer pregunta: ${PRIMER_PREGUNTA}.
        Su respuesta es: `)
        console.log(respuesta);
        preguntasRealizadas ++
        if (respuesta.toUpperCase() == PRIMER_RESPUESTA){
            alert (`Felicitaciones, acertaste la primer pregunta`)
            puntos++
        } else {
            alert (`Respuesta incorrecta!`)
        }
        let respuesta2 = prompt(`Segunda pregunta: ${SEGUNDA_PREGUNTA}
        Su respuesta es:`)
        console.log(respuesta2);
        preguntasRealizadas ++
        if (respuesta2.toUpperCase() == SEGUNDA_RESPUESTA){
            alert (`Felicitaciones, acertaste la segunda pregunta`)
            puntos++
        } else {
            alert (`Respuesta incorrecta!`)
        }
        let respuesta3 = prompt(`Tercer pregunta: ${TERCER_PREGUNTA}.
        Su respuesta es:`)
        console.log(respuesta3);
        preguntasRealizadas ++
        if (respuesta3.toUpperCase() == TERCER_RESPUESTA){
            alert (`Felicitaciones, acertaste la tercer pregunta`)
            puntos++
        } else {
            alert (`Respuesta incorrecta!`)
        }
        alert(`Felicitaciones, terminaste el quiz.
        Sumaste ${puntos} puntos`)
    }
}

btnSaludar(prompt(`Ingrese su nombre`));
btnJugar();   */


//******************************************  Turnos Medicos  ****************************************************
/* let turnoTraumatologo = 0
let turnoMedicoClinico = 0

let cantidadPacientesPermitidos = 2


function btnTurnos() {
    for (let i = 1; i <= cantidadPacientesPermitidos; i++){
        
        let especialidad = prompt (`Desea turno con: TRAUMATOLOGO/MEDICO CLINICO/SALIR`)
        if (especialidad.toLowerCase() === "traumatologo"){
            alert(`Su turno para el traumatologo es el turno #${i}`)
            turnoTraumatologo ++
        } else if (especialidad.toLowerCase() === "medico clinico"){
            alert(`Su turno para el medico clinico es el turno #${i}`)
            turnoMedicoClinico ++
        } else {
            i --
        }
    }
    console.log(`cantidad de turnos para el clinico: ${turnoMedicoClinico}`);
    console.log(`cantidad de turnos para el traumatologo ${turnoTraumatologo}`);
}

let bienvenido = prompt (`Bienvenido a la web para turnos medicos
                        Desea sacar un turno medico? SI/NO`)
    if(bienvenido.toUpperCase() === "SI"){
        btnTurnos()
    } else {
        alert(`Lo esperamos prontoS`)
    }   */


//*******************************************  App pedido comidas  *********************************************

/*  let cantidadFact = 0
let cantidadTorta = 0
let cantidadSang = 0

let cantidadExpresso = 0
let cantidadFlat = 0
let cantidadLatte = 0

let arrayComida =[  {id:1, producto: "Medialuna", precio: 500, stock: 100},
                    {id:2, producto: "Chipa", precio: 500, stock: 100},
                    {id:3, producto: "Sandwich de Miga", precio: 500, stock: 100},
                    {id:4, producto: "Croissant", precio: 500, stock: 100},
                    {id:5, producto: "Torta", precio: 500, stock: 100},
                    {id:6, producto: "Roll de canela", precio: 500, stock: 100},
                ]

let arrayCafe = [   {id:1, producto: "Flat white", precio: 1500, stock: 100},
                    {id:1, producto: "Americano", precio: 1500, stock: 100},
                    {id:1, producto: "Espresso", precio: 1500, stock: 100},
                    {id:1, producto: "Lungo", precio: 1500, stock: 100},
                    {id:1, producto: "Capuccino", precio: 1500, stock: 100}
                ]

function ingresar (direccion, nombre) {
    let bienvenido = prompt(`Bienvenido ${nombre}. Desea comprar? SI/NO`)
    while (bienvenido.toUpperCase() === "SI"){
            let gusto = prompt (`Hay ganas de: Comida/Cafe`)
            if (gusto.toUpperCase() === "COMIDA"){
                let gustoComida = prompt(`Seleccione el producto que le gusta: Factura/Torta/Sandwich`)
                switch (gustoComida.toUpperCase()){
                    case "FACTURA": buscar()
                                    let cantidad1 = parseInt (prompt(`Ingrese la cantidad`))
                                    alert (`Ud quiere ${cantidad1}`)
                                    cantidadFact += cantidad1                                   
                                    break
                    case "TORTA":   let cantidad2 = parseInt (prompt(`Ingrese la cantidad`))
                                    alert (`Ud quiere ${cantidad2}`)
                                    cantidadTorta += cantidad2
                                    break
                    case "Sandwich":  let cantidad3 = parseInt (prompt(`Ingrese la cantidad`))
                                        alert (`Ud quiere ${cantidad3}`)
                                        cantidadSang += cantidad3
                                        break
                    default:        alert (`Ingrese una opcion`)
                                    break
            } 
        }   else {
            let gustoCafe = prompt(`Seleccione el producto que le gusta: Expresso/Flat White/Latte`)
            switch (gustoCafe.toUpperCase()){
                case "EXPRESSO":let cantidad4 = prompt(`Ingrese la cantidad`)
                                alert (`Ud quiere ${cantidad4}`)
                                cantidadExpresso +=cantidad4
                                break
                case "FLAT WHITE":let cantidad5 = parseInt (prompt(`Ingrese la cantidad`))
                                alert (`Ud quiere ${cantidad5}`)
                                cantidadFlat += cantidad5
                                break
                case "LATTE":   let cantidad6 = parseInt (prompt(`Ingrese la cantidad`))
                                alert (`Ud quiere ${cantidad6}`)
                                cantidadLatte += cantidad6
                                break
                default:        alert (`Ingrese una opcion`)
                                break
        }             
    } bienvenido = prompt(`${nombre}, Desea seguir comprando? SI/NO`)
    }   
    alert (`Cafe expresso: ${cantidadExpresso}`);
    alert (`Facturas: ${cantidadFact}`);
    alert(`Flat white; ${cantidadFlat}`);
    alert(`Sandwich: ${cantidadSang}`);
    alert(`Torta: ${cantidadTorta}`);
    alert(`Cafe Latte: ${cantidadLatte}`); 
        let confirmarDireccion = prompt(`${nombre}, la direccion "${direccion} es correcta? SI/NO`)
        if (confirmarDireccion.toLocaleUpperCase() === "SI"){
            alert (`Gracias! ya preparamos su pedido, sera enviado a ${direccion}`)
        } else {
            let nuevaDireccion = prompt (`Ingrese su direccion`)
            alert (`Gracias! ya preparamos su pedido, sera enviado a ${nuevaDireccion}`)
        }
    } 
    
    

ingresar (prompt(`Ingrese su direccion`), prompt(`Ingrese su nombre`));

    console.log(`Cafe expresso: ${cantidadExpresso}`);
    console.log(`Facturas: ${cantidadFact}`);
    console.log(`Flat white; ${cantidadFlat}`);
    console.log(`Sanguches: ${cantidadSang}`);
    console.log(`Torta: ${cantidadTorta}`);
    console.log(`Cafe Latte: ${cantidadLatte}`);  */   




// ********************************************  App de gastos  **************************************************

/* class Amigo {
    constructor (nombre, puso, gasto){
        this.nombre = nombre
        this.puso = parseFloat(puso)
        this.gasto = parseFloat(gasto)
        this.diferencia = 0
    }
    calcularDif(){
        let diferencia = this.puso - this.gasto
        return diferencia
        
    }
}


let amigo1 = new Amigo ("Ramiro", 5000, 2500)
console.log(amigo1.calcularDif());

if (amigo1.calcularDif() < 0){
    console.log(`${amigo1.nombre} gasto mas de lo que puso, por lo tanto debe ${amigo1.calcularDif() * -1}`);
} else {
    console.log(`${amigo1.nombre} gasto menos de lo que puso, por lo tanto se le debe ${amigo1.calcularDif()}`)
} */


//------------------------------------------------------------------------------------------------------
/* 
    console.log(arrayCafe);
    console.log(arrayComida);   */




/* const arrayProducto = [ 
    {prod: 'juguete', precio: 1000},
    {prod: 'casa', precio: 500000},
    {prod: 'celu', precio: 20000}
]

console.log(`el total es: ${arrayProducto.reduce((acumulador, i) => acumulador + i.precio, 0)}`);


let arrayAsad = [
    {producto: 'ROLL DE CANELA', precio: 2000, cantidad: '4'},

    {producto: 'FLAT WHITE', precio: 3000, cantidad: '2'}]

console.log(`asdadsd: ${arrayAsad.reduce((acumulador, i) => acumulador + i.precio, 0)}`); */

//********************DOM***************************/

/* const DIV_HEADER = document.querySelector("#divHeader")
console.log(DIV_HEADER);
DIV_HEADER.innerHTML = `Este es el nuevo header`

const MAIN_UL = document.querySelector("#mainIndex")

MAIN_UL.innerHTML = `<div class="asdada">Nombre</div>
                    <div>Apellido</div>
                    <button>Ingresar</button>`

let parrafo = document.createElement("p")
parrafo.textContent = "Este parrafo lo cree desde JS"
document.body.appendChild(parrafo)   */


// CLASE 10 ************************************* EVENTOS *******************************************************

// Eventos son la manera que tenemos de controlar en JS las acciones de usuarios y definir un comportamiento
// Existen 3 formas de realizar la escucha de un evento. La 3er forma es mala practica, asi que no se usa

//1er manera

/* const BTN = document.getElementById ("btn") 
BTN.addEventListener('click', ()=> {
    alert(`Hiciste click`);
}) 


const EVENTOS = document.createElement("div")
EVENTOS.innerHTML = "Clase 10 - eventos (creado desde JS)"
divHeader.appendChild(EVENTOS)  */

//2da manera - utilizamos las propiedades del nodo

/* BTN.onclick = () => {alert(`Hiciste clickasasdada`)}  */

//3er manera - se escribe la funcion directamente en el html

/* function eventoEnHtml() {
    alert (`Esta es la tercer manera`)
} */

const CAJA = document.querySelector("#btn")
CAJA.onmousedown = ()=> {
    console.log(`esta pasando el mouse sobre la caja`); 
} 

const CAMPO_TEXTO = document.querySelector("#campoTexto")

CAMPO_TEXTO.onkeydown = () => {
    console.log(`Tecla abajo`);
} 
CAMPO_TEXTO.onkeyup = ()=> {
    console.log(`Tecla arriba`);
} 

CAMPO_TEXTO.addEventListener("change", ()=> {
    console.log(`Valor cambiado: ${CAMPO_TEXTO.value}`);
}) 

CAMPO_TEXTO.addEventListener("input", ()=> {
    console.log(CAMPO_TEXTO.value);
}) 

// EVENTO SUBMIT ==> SE ACTIVA CUANDO UN FORMULARIO ES ENVIADO

class Cliente{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

const ARRAY_CLIENTES = []

const FORMULARIO = document.querySelector("#formulario")

FORMULARIO.addEventListener("submit", (e)=> {
e.preventDefault()
    const NOMBRE = document.getElementById("nombre")
    const APELLIDO = document.getElementById("apellido")

    console.log(`El nombre ingresado es ${NOMBRE.value} 
    y el apellido es ${APELLIDO.value}`); 

    const cliente1 = new Cliente (NOMBRE.value, APELLIDO.value)

    ARRAY_CLIENTES.push (cliente1)

    FORMULARIO.reset()

    console.log(ARRAY_CLIENTES);
})

// CLASE 11 ------------------- STORAGE & JASON ------------------------------

// LocalStorage ==> los datos se van a almacenar de manera indefinida

/* SessionStorage ==> los datos se almacenan de forma temporal. 
Una vez que se cierra la pantalla se pierden los datos. Los datos van a 
estar disponibles mientras dura le sesion */

//setItem ==> es un metodo que proporciona el objeto local storage.
//De esta manera almacenamos los datos de manera local

localStorage.setItem("saludo", "Hola chicos!")

localStorage.setItem("Despedida", "Chau chicos")

//getItems ==> Es un metodo por el cual recuperamos valores almacenados en el local navegador   

let valor = localStorage.getItem("saludo")
console.log(valor);

localStorage.setItem("Numero", 123);
let numero = localStorage.getItem("Numero")

console.log(typeof "numero");

let numeroComoNumero = parseInt(numero)
console.log(typeof numeroComoNumero);

//SessionStorage funciona similar a localStorage

/* sessionStorage.setItem ("nombre", "Tomas") */


//removeItem ==> Metodo que nos permite eliminar un elemento

localStorage.setItem("eliminar", "frase a eliminar")
localStorage.removeItem("eliminar")

//clear() ==> limina de manera global todos los datos almacenados
/* localStorage.clear() */

//Recorremos el localStorage

localStorage.setItem("nombre", "juan")
localStorage.setItem("edad", "25")
localStorage.setItem("ciudad", "mar del plata")

//Obtener todas las claves almacenadas en el localStorage

let todasLasClaves = Object.keys(localStorage)

for(let i = 0; i < todasLasClaves.length; i++){
    let clave = todasLasClaves[i]
    let valor = localStorage.getItem(clave)

    console.log(clave, valor);

}


//****************************JSON***************************************

//JavaScript object notation. Es un formato de intercambio de datos

/* let persona = {nombre: "Juan", edad: 25, ciudad: "Mar del Plata"} */


//stringify -==> es una funcion que convierte cualquier objeto en una cadena Json

/* let jsonPersona = JSON.stringify(persona)

console.log(jsonPersona); */

/* localStorage.setItem("nombreJS", "maxiJS")

const PERSONAJS = localStorage.getItem("nombreJS")

const PERSONA = JSON.parse (PERSONAJS)
console.log(PERSONA, typeof PERSONA); */

//Modo oscuro - modo claro

/* const BOTON_MODO = document.getElementById("botonModo")

BOTON_MODO.addEventListener("click", ()=> {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")

    } else{
        localStorage.setItem("modo", "claro")
    }
}) */

// GENERANDO UN CARRITO DE COMPRAS

class Producto {
    constructor (nombre, precio){
    this.nombre = nombre 
    this.precio = precio
    }
}


const product1 = new Producto ("camisa", 500)
const product2 = new Producto ("jean", 300)
const product3 = new Producto ("remera", 400)

const carrito = []

carrito.push(product1)
carrito.push(product2)
carrito.push(product3)

console.log(carrito);

const carritoJSON = JSON.stringify(carrito) //==> esto es para almacenar el carrito en el storage

localStorage.setItem("carrito", carritoJSON)

const carritoRecuperado = localStorage.getItem("carrito")

const carritoObjeto = JSON.parse(carritoRecuperado)

const contenedorCarrito = document.querySelector("#contenedorCarrito")

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p>${producto.nombre} - ${producto.precio}</p>`
    
});

// Pre-entrega II -------------------------------------------------

//*******************************************  App pedido comidas  *********************************************

/* let cantidadFact = 0
let cantidadTorta = 0
let cantidadSang = 0

let cantidadExpresso = 0
let cantidadFlat = 0
let cantidadLatte = 0

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
        let bienvenido = ""
        while (bienvenido.toUpperCase() === "SI"){
                let gusto = ""
                    if (gusto.toLowerCase() === "comida"){
                    this.gustoComida = ""
                    } else {
                    this.gustoComida = ""
                    }
                    let comidaSeleccionada = this.buscarProducto(gusto)
                    
                    let cantidad = ""
                    let precioTotal = comidaSeleccionada.precio * parseInt(cantidad)
                    comidaSeleccionada.stock -= cantidad 
                    carrito.push({producto: comidaSeleccionada.producto, precio: precioTotal, cantidad: cantidad})    
                    
                    bienvenido = ""
        } 
        
        alert (`Tu compra es ${carrito.map((producto,i) => `${i+1}. ${producto.cantidad} ${producto.producto}`)},
        Sera enviado a la direccion: ${this.direccion}`) */
        /* alert (`Por un total de ${carrito.reduce((acumulador, precio) =>acumulador + precio.precio, 0)}`) *///* no me sale el reduce() */
        /*   console.log(carrito); */
       /*  alert (`Vuelva prontos`)  */
  /*       }      
            
    } */

/* const CLIENTE1 = new Cliente (prompt(`ingrese nombre`), prompt(`ingrese direccion`)) */
/* CLIENTE1.ingresar()   */