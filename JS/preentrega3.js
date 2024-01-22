
setTimeout(()=>{
  Swal.fire({
    title: "Bienvenido a la tienda de Birra",
    text: "Una fría no se le niega a nadie.",
    imageUrl: "https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg",
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Custom image"
  });
}, 1000)


const obj = JSON.parse(localStorage.getItem("carrito"))

let carrito = obj || [] 
console.log(`obj: ${obj}`);
console.log(`carrito: ${carrito}`);
let header = document.createElement("div")
header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img class="navBarImg" src="https://www.diarioconvos.com/wp-content/uploads/2024/01/cerveza-artesanal-828x548.jpg" alt=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="color-mode" >Cambiar a dark mode</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Cervezas
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Rubia</a></li>
          <li><a class="dropdown-item" href="#">Roja</a></li>
          
          <li><a class="dropdown-item" href="#">Negra</a></li>
        </ul>
      </li>
      
    </ul>
    <form class="d-flex" role="search" id="alerta-form">
      <input class="form-control me-2" type="text" id="alerta-input" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`

    divHeader.appendChild(header)

const urlUsuarios = "https://api.punkapi.com/v2/beers"

let arrayProductos = [];

const getBeers = () => fetch(urlUsuarios)
  .then(response => response.json())
  .then(data => arrayProductos = data )
  .catch(e => console.log(e))          

  const renderCards = async (filteredProduct) => {
    await getBeers() 
    const arrayToUse = filteredProduct || arrayProductos
    arrayToUse.map(producto => {
      producto = {
        ...producto,
        price: Math.floor((Math.random()*500))+1500
      }
      let divComida = document.createElement("div")
      divComida.classList.add("col-xl-3", "col-md-6", "col-sm-12")   
      divComida.innerHTML =  `
                                  <div class="card">
                                  <img src="${producto.image_url}"  alt="..." class="imgProducto"> 
                                  <div class="card-body">
                                  <h5 class="card-title">${producto.name.toUpperCase()}</h5>
                                  <p class="card-text">$${producto.price}.</p>
                                  <input type="number" value="1" min="0" id="input-${producto.id}">
                                  
                                  <button class="btn btn-primary" id="buttonCompra-${producto.id}">AGREGAR PRODUCTO</button>                         
                                  </div>                         
                              </div>` 
                              
                      contenedorProductos.appendChild(divComida)

                      let compraButton = document.getElementById(`buttonCompra-${producto.id}`)
                      compraButton.addEventListener("click", ()=> {                                          
                      carrito.push(producto)
                      localStorage.setItem("carrito", JSON.stringify(carrito))
                      Toastify({
                        text: "Producto Agregado",
                        className: "info",
                        duration: 1500,
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        }
                      }).showToast();
            
      })
  });
  } 
  renderCards() 

let alertaForm = document.getElementById("alerta-form")
let alertaInput = document.getElementById("alerta-input")

alertaForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  console.log('alertaInput.value',alertaInput.value);
  const prodBuscado = arrayProductos.find((producto) => producto.name.toUpperCase().includes(alertaInput.value.toUpperCase()))
  alertaForm.focus() 
  contenedorProductos.textContent = ""   
  renderCards(alertaInput.value === "" ? arrayProductos : [prodBuscado])
})

const darkMode = document.getElementById("color-mode")
const body = document.body

    darkMode.addEventListener("click", cambiarModoColor)
    function cambiarModoColor(){
      body.classList.toggle("dark-mode")
      if (body.classList.contains("dark-mode")){
        darkMode.innerHTML = `Cambiar a light mode`
      } else {
        darkMode.innerHTML = `Cambiar a dark mode`
      }
    }

const CONTENEDOR_CARRITO = document.getElementById("contenedorCarrito")
const VER_CARRITO = document.getElementById("verCarrito")
const VACIAR_CARRITO = document.getElementById("vaciarCarrito")
VER_CARRITO.addEventListener("click", ()=> {
  mostrarCarrito()
})
const mostrarCarrito = ()=> {
    CONTENEDOR_CARRITO.innerHTML = " "
    carrito.forEach(producto => {
      console.log('producto',producto);
      let divComida = document.createElement("div")
      divComida.classList.add("col-xl-3", "col-md-6", "col-sm-12")
      divComida.innerHTML = `
                                  <div class="card" ;">
                                  <img src="${producto.image_url}"  alt="..." class="imgProducto">
                                  <div class="card-body">
                                  <h5 class="card-title">${producto.name.toUpperCase()}</h5>
                                  <p class="card-text">$${producto.price}.</p>                         
                                  <button class="btn btn-primary" id="eliminar-${producto.id}">ELIMINAR PRODUCTO</button>                         
                                  </div>                         
                              </div>`
                  
      CONTENEDOR_CARRITO.appendChild(divComida)
      
      const button = document.getElementById(`eliminar-${producto.id}`)
      button.addEventListener("click", ()=> {
        
        CONTENEDOR_CARRITO.removeChild(divComida)
        
        const productoSeleccionado = carrito.find(prod => prod.id === producto.id)
        const indice = carrito.indexOf(productoSeleccionado)
        
        carrito.splice(indice, 1)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log(carrito);
        Toastify({
          text: "Producto Eliminado",
          className: "info eliminado",
          duration: 1500,
          style: {
            background: "linear-gradient(to right, #1111, #990000)",
          }
        }).showToast();
      })
})
}   
    //AL borrar el carrito por completo se vacia todo lo que esta adentro, incluso el "ver carrito" y "vaciar carrito"
VACIAR_CARRITO.addEventListener("click", ()=> {
  Swal.fire({
    title: 'Estas seguro?',
    text: `Tenes ${carrito.length} productos`,
    icon: 'warning',
    showCancelButton: 'Cancelar',
    confirmButtonText: 'Aceptar'
  }).then((result)=>{
    if(result.isConfirmed){
      CONTENEDOR_CARRITO.innerHTML = " "
      localStorage.setItem("carrito", JSON.stringify([]))
      carrito = []
      Swal.fire({
        text: 'Se han eliminado los productos',
        icon: 'success',
        confirmButtonText: 'Aceptar'
        
      })
    }
  })
})

