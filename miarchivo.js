class Producto{
    constructor(id,name,author,editorial,price,pages,imagen){
        this.id = id
        this.name = name;
        this.author = author;
        this.editorial = editorial;
        this.price = price;
        this.pages = pages;
        this.imagen = imagen;
        this.cantidad = 1;
    }
}

const productos = [];

const autobiografiaDeUnYogui = new Producto (1,"Autobiografia De Un Yogui","Paramahansa Yogananda","Crystal Clarity Publishers",20000,562,"./image/autobiografia-de-un-yogui.jpg");
productos.push(autobiografiaDeUnYogui);
const secretosReveladosDeKriyaYoga = new Producto (2,"Secretos Revelados de Kriya Yoga","JC Stevens","Golden Swan Publishing",30000,376,"image/secretos-revelados.jpg");
productos.push(secretosReveladosDeKriyaYoga);
const elNuevoSendero = new Producto (3,"El Nuevo Sendero","Swami Kriyananda","Asociación Ananda Ediciones",20000,626,"./image/el-nuevo-sendero.jpg");
productos.push(elNuevoSendero);
const rayaYoga = new Producto (4,"Raya Yoga","Swami Kriyananda","Asociación Ananda Ediciones",25000,442,"image/raja-yoga-el-manual-completo-de-yoga-y-meditacion.jpg");
productos.push(rayaYoga);
const rajarsiJanakananda = new Producto (5,"Rajarsi Janakananda: Un Gran Yogui Occidental","Self-Realization Fellowship","Self-Realization Fellowship",12000,304,"./image/rajarsi.jpg");
productos.push(rajarsiJanakananda);
const soloDios = new Producto (6,"Sólo Dios","Self-Realization Fellowship","Self-Realization Fellowship",13000,341,"image/solodios.jpg");
productos.push(soloDios);
const dosRanasEnApuros = new Producto (7,"Dos Ranas en Apuros","Paramahansa Yogananda","Self-Realization Fellowship",26000,26,"./image/dosranas.jpg");
productos.push(dosRanasEnApuros);
const elVinoDelMistico = new Producto (8,"El vino del místico","Paramahansa Yogananda","Self-Realization Fellowship",20000,280,"./image/elvinomistico.jpg");
productos.push(elVinoDelMistico)
const mejda = new Producto (9,"Mejda","Sananda Lal Ghosh","Self-Realization Fellowship",24000,380,"./image/mejda.jpg");
productos.push(mejda)

let carrito = [];
//Cargar cariito desde LocalStorage
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

const contenedorproducto = document.getElementById("contenedorproducto");

mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl3","col-md-4","col-xs-12");
        card.innerHTML =`
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top imgProducto" alt="${producto.name};
                <div class="card-body">
                <h4 class="card-name"> ${producto.name} </h4>
                <h5 class="card-author"> ${producto.author} </h5>
                <p class="card-text"> $${producto.price} </p>
                <button class="btn btn-primary" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>

        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })

    })
}

//Funcion agregar al carrito

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);

        // Agregar al LocalStorage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

// Mostrar Carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
     mostrarCarrito();
 });

//Funcion mostrar carrito
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
   carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl3","col-md-4","col-xs-12");
        card.innerHTML =`
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top imgProducto" alt="${producto.name};
                <div class="card-body">
                <h4 class="card-name"> ${producto.name} </h4>
                <h5 class="card-author"> ${producto.author} </h5>
                <p class="card-text"> $${producto.price} </p>
                <p class="card-text"> Unidades: ${producto.cantidad} </p>
                <button class="btn btn-primary" id="eliminar${producto.id}"> Eliminar Producto </button>
                </div>
            </div>

        `
        contenedorCarrito.appendChild(card);

        //Eliminar Producto del carrito
         const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
         })
    })
    calcularTotal();
}

const eliminarDelCarrito = (id) =>{
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //eliminar del LocalStorage
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

// Vaciar Carrito de Compra

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

// Funcion para Eliminar todo el Carrito

const eliminarTodoElCarrito = () => {
    carrito = []
    mostrarCarrito();

    //Eliminar LocalStorage
    localStorage.clear();
}

// Total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalComrpa = 0
    carrito.forEach((producto) => {
        totalComrpa += producto.price * producto.cantidad; //+= es lo mismo que totalcompra = totalcompra + ......        
    })
    total.innerHTML = ` $${agregarSeparadorMiles(totalComrpa)}`
}

// Separador de miles
agregarSeparadorMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return partesNumero.join(".");
}


