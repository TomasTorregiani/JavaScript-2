// Proyecto 1er Pre-Entrega
//Quiz de los simpsons

function btnSaludar(nombre){
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
btnJugar();  


// Turnos Medicos
let turnoTraumatologo = 0
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
    }  


// App pedido comidas

let cantidadFact = 0
let cantidadTorta = 0
let cantidadSang = 0

let cantidadExpresso = 0
let cantidadFlat = 0
let cantidadLatte = 0


function ingresar (direccion, nombre) {
    let bienvenido = prompt(`Bienvenido ${nombre}. Desea comprar? SI/NO`)
    while (bienvenido.toUpperCase() === "SI"){
            let gusto = prompt (`Hay ganas de: Comida/Cafe`)
            if (gusto.toUpperCase() === "COMIDA"){
                let gustoComida = prompt(`Seleccione el producto que le gusta: Factura/Torta/Sanguchitos`)
                switch (gustoComida.toUpperCase()){
                    case "FACTURA": let cantidad1 = parseInt (prompt(`Ingrese la cantidad`))
                                    alert (`Ud quiere ${cantidad1}`)
                                    cantidadFact += cantidad1
                                    
                                    break
                    case "TORTA":   let cantidad2 = parseInt (prompt(`Ingrese la cantidad`))
                                    alert (`Ud quiere ${cantidad2}`)
                                    cantidadTorta += cantidad2
                                    break
                    case "SANGUCHITOS":  let cantidad3 = parseInt (prompt(`Ingrese la cantidad`))
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
    alert(`Sanguches: ${cantidadSang}`);
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
    console.log(`Cafe Latte: ${cantidadLatte}`);  




