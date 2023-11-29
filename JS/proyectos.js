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

// ------------------------------- DOM ----------------------------------------------
/* let arrayComida = [];
let arrayCafe = [];

let header = document.createElement("div")
header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`

    divHeader.appendChild(header)

class Producto{
    constructor (producto,precio,stock, img){
        this.producto = producto
        this.precio = precio
        this.stock = stock
        this.img = img
    }
}

const FACTURA = new Producto ("factura", 500, 75, "https://saborargento.com.ar/wp-content/uploads/2023/06/Receta-de-Medialunas-de-Grasa.jpg");
arrayComida.push(FACTURA)

const CHIPA = new Producto ("chipa", 450, 50, "https://www.rionegro.com.ar/wp-content/uploads/2020/01/Chip%C3%A1.jpg");
arrayComida.push(CHIPA)

const SANDWICH_MIGA = new Producto ("sandwich de miga", 580, 28, "https://www.clarin.com/img/2021/08/06/M4wbnpEIC_720x0__1.jpg");
arrayComida.push(SANDWICH_MIGA)

const CROISSANT = new Producto ("croissant", 850, 36, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/800px-2018_01_Croissant_IMG_0685.JPG");
arrayComida.push(CROISSANT)

const TORTA = new Producto("torta", 1250, 10, "https://d2r9epyceweg5n.cloudfront.net/stores/002/903/404/products/foto-tortas-web-1024x1024-031-c98248d6d1c7ffc2ef16778710656406-1024-1024.png");
arrayComida.push(TORTA)

const ROLL_DE_CANELA = new Producto("roll de canela",1000, 47,"https://cdn0.recetasgratis.net/es/posts/6/5/6/rollos_de_canela_faciles_23656_orig.jpg");
arrayComida.push(ROLL_DE_CANELA)

console.log(arrayComida);


const FLAT_WHITE = new Producto("flat white", 1250, 25, "https://www.nespresso.com/coffee-blog/sites/default/files/2022-06/09_img_940x740_0.jpg")
arrayCafe.push(FLAT_WHITE)

const AMERICANO = new Producto("americano", 1000, 36, "https://cdn.recetasderechupete.com/wp-content/uploads/2023/11/Cafe-americano-portada.jpg")
arrayCafe.push(AMERICANO)

const ESPRESSO = new Producto("espresso", 750, 54, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswGLta-a0xViixEqTIbKz0hzp_atz1SaXWw&usqp=CAU")
arrayCafe.push(ESPRESSO)

const LUNGO = new Producto("lungo", 850, 34, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiuL87X8UHn0R33IN_whlOE-QpI57MUTw0A&usqp=CAU")
arrayCafe.push(LUNGO)

const CAPUCCINO = new Producto("capuccino", 1450, 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9i8cDhZRIh0RCh_IDe331iP-hf7lJr9b0bQ&usqp=CAU")
arrayCafe.push(CAPUCCINO)

console.log(arrayCafe);

arrayComida.forEach(producto => {
    let divComida = document.createElement("div")

    divComida.innerHTML = `
                                <div class="card" style="width: 18rem;">
                                <img src="${producto.img}" width='250px' height='250px' alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${producto.producto.toUpperCase()}</h5>
                                <p class="card-text">$${producto.precio}.</p>
                                <a href="#" class="btn btn-primary">COMPRAR<a>                         
                                </div>                         
                            </div>`
                    contenedorProductosComida.appendChild(divComida)
});

arrayCafe.forEach(producto => {
    let divCafe = document.createElement("div")
    divCafe.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${producto.producto.toUpperCase()}</h5>
                            <p class="card-text">$${producto.precio}.</p>
                            <a href="#" class="btn btn-primary">COMPRAR</a>
                            </div>
                        </div>`
                    contenedorProductosCafe.appendChild(divCafe)
}); */