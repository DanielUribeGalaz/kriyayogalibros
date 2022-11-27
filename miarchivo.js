class LibrosEnVenta{
    constructor(id,title,author,editorial,price,pages,imagen){
        this.id = id
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.price = price;
        this.pages = pages;
        this.imagen = imagen;
    }
}

const librosArray = [];

const autobiografiaDeUnYogui = new LibrosEnVenta (1,"Autobiografia De Un Yogui","Paramahansa Yogananda","Crystal Clarity Publishers",20000,562,"./image/autobiografia-de-un-yogui.jpg");
librosArray.push(autobiografiaDeUnYogui);
const secretosReveladosDeKriyaYoga = new LibrosEnVenta (2,"Secretos Revelados de Kriya Yoga","JC Stevens","Golden Swan Publishing",30000,376,"image/secretos-revelados.jpg");
librosArray.push(secretosReveladosDeKriyaYoga);
const elNuevoSendero = new LibrosEnVenta (3,"El Nuevo Sendero","Swami Kriyananda","Asociación Ananda Ediciones",20000,626,"./image/el-nuevo-sendero.jpg");
librosArray.push(elNuevoSendero);
const rayaYoga = new LibrosEnVenta (4,"Raya Yoga","Swami Kriyananda","Asociación Ananda Ediciones",25000,442,"image/raja-yoga-el-manual-completo-de-yoga-y-meditacion.jpg");
librosArray.push(rayaYoga);

const divProductos = document.querySelector('#divProductos')

librosArray.forEach(libros => {
    
    divProductos.innerHTML = divProductos.innerHTML+`
    <div id="${libros.id}" class="card cardProducto">
        <div class="card-body">    
            <h5 class="card-title">${libros.title}</h5>           
            <img src=${libros.imagen} width="170px" height="170px">
            <p class="card-text">$${libros.price}</p>
            <button id="${libros.id}" class="btn btn-primary">AGREGAR</button>
        </div>
    </div>
    
    `
});

const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-primary');

botonesAgregar.forEach(boton=>{
    boton.onclick = () => {
        const libros = librosArray.find((prod)=>prod.id===parseInt(boton.id))
        
        const librosCarrito = {
            id: libros.id,
            name: libros.name,
            price: libros.price,
            cantidad: 1
        }
   
        const indexCarrito = carrito.findIndex((prod)=>prod.id===libros.id)
        
        if(indexCarrito=== -1){
            carrito.push(librosCarrito)
        } else {
            carrito[indexCarrito].cantidad +=1
        }
    }
})

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    const totalCompra = carrito.map(prod=>prod.price*prod.cantidad).reduce((elem1,elem2)=>elem1+elem2)
    alert(`El total de tu compra es $${totalCompra}`)
}
