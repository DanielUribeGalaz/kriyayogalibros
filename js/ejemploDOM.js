const librosArray = [];

class LibrosEnVenta{
    constructor(id,title,author,editorial,price,pages){
        this.id = id
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.price = price;
        this.pages = pages;
    }
}

const autobiografiaDeUnYogui = new LibrosEnVenta (1,"Autobiografia De Un Yogui","Paramahansa Yogananda","Crystal Clarity Publishers",20000,562);
librosArray.push(autobiografiaDeUnYogui);
const secretosReveladosDeKriyaYoga = new LibrosEnVenta (2,"Secretos Revelados de Kriya Yoga","JC Stevens","Golden Swan Publishing",30000,376);
librosArray.push(secretosReveladosDeKriyaYoga);
const elNuevoSendero = new LibrosEnVenta (3,"El Nuevo Sendero","Swami Kriyananda","Asociación Ananda Ediciones",20000,626);
librosArray.push(elNuevoSendero);
const rayaYoga = new LibrosEnVenta (4,"Raya Yoga","Swami Kriyananda","Asociación Ananda Ediciones",25000,442);
librosArray.push(rayaYoga);

// manipular DOM

const selectlibro = document.getElementById('lista') //recorre elemto por elemento y ejecutaras el siguiente codigo

librosArray.forEach(elemento=>{
    const optionLibro = document.createElement('option') // creatElement crea etiquetas (elemento option) en el HTML desde el DOM
    selectlibro.append(optionLibro) //el elemento creado (option), lo incrustro con el append en el select
    optionLibro.innerText = `${elemento.title}: $${elemento.price}`
    optionLibro.setAttribute('id',`${elemento.id}`)

})

// Carrito
const carrito = []

const botonAgregarAlCarrito = document.getElementById('agregarLibro')
const finalizarCompra = document.getElementById('finalizarCompra')

botonAgregarAlCarrito.onclick= () => {
    const indexLibro = selectlibro.selectedIndex
    const librosSeleccionado = librosArray[indexLibro]
    carrito.push(librosSeleccionado)
}

finalizarCompra.onclick = () => {
    let total = 0
    carrito.forEach((libro) => {
        total = total + libro.price
    })
    alert(
        `Escogiste ${carrito.length} libros y el total de tu compra es de ${total}`
    )
}