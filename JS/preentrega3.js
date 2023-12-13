
let arrayProductos = [];
const obj = JSON.parse(localStorage.getItem("carrito"))

let carrito = obj || [] 
console.log(`obj: ${obj}`);
console.log(`carrito: ${carrito}`);
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
        <a class="nav-link" href="#" id="color-mode" >Cambiar a dark mode</a>
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
    <form class="d-flex" role="search" id="alerta-form">
      <input class="form-control me-2" type="text" id="alerta-input" placeholder="Search" aria-label="Search">
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
  arrayProductos.push(FACTURA)
  
  const CHIPA = new Producto ("chipa", 450, 50, "https://www.rionegro.com.ar/wp-content/uploads/2020/01/Chip%C3%A1.jpg");
  arrayProductos.push(CHIPA)
  
  const SANDWICH_MIGA = new Producto ("sandwich de miga", 580, 28, "https://www.clarin.com/img/2021/08/06/M4wbnpEIC_720x0__1.jpg");
  arrayProductos.push(SANDWICH_MIGA)
  
  const CROISSANT = new Producto ("croissant", 850, 36, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/800px-2018_01_Croissant_IMG_0685.JPG");
  arrayProductos.push(CROISSANT)
  
  const TORTA = new Producto("torta", 1250, 10, "https://d2r9epyceweg5n.cloudfront.net/stores/002/903/404/products/foto-tortas-web-1024x1024-031-c98248d6d1c7ffc2ef16778710656406-1024-1024.png");
  arrayProductos.push(TORTA)
  
  const ROLL_DE_CANELA = new Producto("roll de canela",1000, 47,"https://cdn0.recetasgratis.net/es/posts/6/5/6/rollos_de_canela_faciles_23656_orig.jpg");
  arrayProductos.push(ROLL_DE_CANELA)
  
  
  const FLAT_WHITE = new Producto("flat white", 1250, 25, "https://www.nespresso.com/coffee-blog/sites/default/files/2022-06/09_img_940x740_0.jpg")
  arrayProductos.push(FLAT_WHITE)
  
  const AMERICANO = new Producto("americano", 1000, 36, "https://cdn.recetasderechupete.com/wp-content/uploads/2023/11/Cafe-americano-portada.jpg")
  arrayProductos.push(AMERICANO)
  
  const ESPRESSO = new Producto("espresso", 750, 54, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswGLta-a0xViixEqTIbKz0hzp_atz1SaXWw&usqp=CAU")
  arrayProductos.push(ESPRESSO)
  
  const LUNGO = new Producto("lungo", 850, 34, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiuL87X8UHn0R33IN_whlOE-QpI57MUTw0A&usqp=CAU")
  arrayProductos.push(LUNGO)
  
  const CAPUCCINO = new Producto("capuccino", 1450, 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9i8cDhZRIh0RCh_IDe331iP-hf7lJr9b0bQ&usqp=CAU")
  arrayProductos.push(CAPUCCINO)
  


  function renderCards(array) {
    array.forEach(producto => {
      
      let divComida = document.createElement("div")
      divComida.classList.add("col-xl-3", "col-md-6", "col-sm-12")
      divComida.innerHTML = `
                                  <div class="card" ;">
                                  <img src="${producto.img}"  alt="..." class="imgProducto">
                                  <div class="card-body">
                                  <h5 class="card-title">${producto.producto.toUpperCase()}</h5>
                                  <p class="card-text">$${producto.precio}.</p>
                                  <input type="number" value="0" min="0" id="input-${producto.producto}">
                                  
                                  <a href="#" class="btn btn-primary" id="buttonCompra-${producto.producto}">AGREGAR PRODUCTO<a>                         
                                  </div>                         
                              </div>`
                      contenedorProductos.appendChild(divComida)

                      let compraButton = document.getElementById(`buttonCompra-${producto.producto}`)
                      let input = document.getElementById(`input-${producto.producto}`)
  
                      compraButton.addEventListener("click", ()=> {                                          
                      carrito.push({producto: producto.producto, precio: producto.precio, cantidad: input.value, img: producto.img})
                      localStorage.setItem("carrito", JSON.stringify(carrito))
            
      })
  });
  } 
  renderCards(arrayProductos)

let alertaForm = document.getElementById("alerta-form")
let alertaInput = document.getElementById("alerta-input")

alertaForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const prodBuscado = arrayProductos.find((producto) => producto.producto === alertaInput.value)
    alertaForm.focus() 

    contenedorProductos.textContent = ""   
    renderCards(alertaInput.value ==="" ? arrayProductos : [prodBuscado])
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


VER_CARRITO.addEventListener("click", ()=> {
  mostrarCarrito()

})
const mostrarCarrito = ()=> {
    CONTENEDOR_CARRITO.innerHTML = " "
    carrito.forEach(producto => {
      let divComida = document.createElement("div")
      divComida.classList.add("col-xl-3", "col-md-6", "col-sm-12")
      divComida.innerHTML = `
                                  <div class="card" ;">
                                  <img src="${producto.img}"  alt="..." class="imgProducto">
                                  <div class="card-body">
                                  <h5 class="card-title">${producto.producto.toUpperCase()}</h5>
                                  <p class="card-text">$${producto.precio}.</p>                         
                                  <a href="#" class="btn btn-primary" id="eliminar-${producto.producto}">ELIMINAR PRODUCTO<a>                         
                                  </div>                         
                              </div>`
                  
      CONTENEDOR_CARRITO.appendChild(divComida)
      
      const button = document.getElementById(`eliminar-${producto.producto}`)
      button.addEventListener("click", ()=> {
        
        CONTENEDOR_CARRITO.removeChild(divComida)
        
        const productoSeleccionado = carrito.find(prod => prod.producto === producto.producto)
        const indice = carrito.indexOf(productoSeleccionado)
        
        carrito.splice(indice, 1)
        localStorage.setItem(JSON.stringify("carrito", carrito))
        console.log(carrito);
      })
})
}  



