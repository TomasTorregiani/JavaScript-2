//Reservas hoteles ----------------------- No me salio----------------------------------

let habitacionesA = 1
let habitacionesB = 0

let precioHabitacionA = 5000
let precioHabitacionB = 10000

while (habitacionesA >= 0 || habitacionesB >= 0){
    
    let habitacionSeleccionada = prompt (`seleccione una habitacion:(A/B) Precio A = $5000/Precio B = $10000`)
    if (habitacionSeleccionada.toUpperCase() === "A" && habitacionesA >= 0){
        alert (`Ud selecciono habitacion A, por $5000`)
        let metodoPago = prompt (`Seleccione un metodo de pago (Tarjeta/Efectivo(10% Descuento))`)
        if (metodoPago.toUpperCase() === "TARJETA"){
            alert (`El precio de la habitacion es $${precioHabitacionA}`)
            habitacionesA --
        } else {
            let precioDescuento = precioHabitacionA - precioHabitacionA * 0.10
            alert (`El precio con descuento es: $${precioDescuento}`)
            habitacionesA --
        } 
        
    }else if (habitacionSeleccionada.toUpperCase() === "A" && habitacionesA == 0){    
        alert (`No hay mas habitaciones disponibles`)
    } else { 
        alert (`Ud selecciono habitacion B, por $10000`)
        if (habitacionesB >= 0) {
            let metodoPagoB = prompt (`Seleccione un metodo de pago (Tarjeta/Efectivo(10% Descuento))`)
            if (metodoPagoB.toLocaleUpperCase() === "TARJETA"){
                alert (`El precio de la habitacion es $${precioHabitacionB}`)
                habitacionesB --
            } else { 
                let precioDescuentoB = precioHabitacionB - precioHabitacionB * 0.10
                alert (`El precio de la habitacion es $${precioDescuentoB}`)
                habitacionesB --
            }
            
        } else {
            alert (`No quedan mas habitaciones disponibles`)
        }
    } 
} 

console.log (habitacionesB);
console.log (habitacionesA);


// E-Commerce  --------------------------------- NO ME SALIOOOOOOOO ---------------------------

/* let productos = " " 

let ingresar = prompt (`Bienvenido, quiere ingresar al sitio a comprar? 
SI/NO`)

while (ingresar ==="SI"){
    let producto = prompt(`Seleccione el producto que quiera comprar
                            (pantalones/remeras/buzos)`)
    switch (producto){
        case "pantalones": alert (`ud quiere pantalones`)
        let marcaPantalones = prompt (`Seleccione la marca: Adidas/nike`)
            switch (marcaPantalones) {
                case "adidas": 
                const TALLE_PANTALON = prompt (`Ingrese el talle: S/M/L`)                                         
                switch (TALLE_PANTALON){
                    case "s": 
                    const CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`) 
                    break
                    case "m":
                    CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`)  
                    break
                    case "l":          
                    CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`)  
                    break
                    default: alert(`Ingrese un talle`) 
                    break             
                case "nike":   
                TALLE_PANTALON = prompt (`Ingrese el talle: S/M/L`)
                switch (TALLE_PANTALON){
                    case "s": 
                    const CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`) 
                    break
                    case "m":
                    CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`)  
                    break
                    case "l":          
                    CANTIDAD_PANTALON = parseInt(prompt(`Ingrese la cantidad`)) 
                    alert (`Ud quiere comprar: ${CANTIDAD_PANTALON} pantalones, marca ${marcaPantalones}`)  
                    break
                    default: alert(`Ingrese un talle`) 
                    break 
                default: alert(`Seleccione una marca`)   
                break         
                }
                default: alert("Seleccione un producto")
                break
                
                }
        break
        case "remeras": alert (`Ud quiere remeras`)
        default: alert(`bla`)
            }
    }    
}  */