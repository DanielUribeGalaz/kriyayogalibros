let producto = parseInt(prompt("Que libro te gustaria llevar?: 1.Autobiografia de un Yogui - 2.Secretos Revelados de Kriya Yoga - 3.El Nuevo Sendero - 4.Raya Yoga"))
let seguirComprando = true
let totalCompra = 0
let decision
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
console.log(librosArray)

while(seguirComprando===true){
    totalCompra = totalCompra + librosArray[producto-1].price;

    decision = parseInt(prompt("Quieres algun otro libro? 1.Si - 2.No"))
    if(decision===1){
        producto = parseInt(prompt("Que libro te gustaria llevar?: 1.Autobiografia de un Yogui - 2.Secretos Revelados de Kriya Yoga - 3.El Nuevo Sendero - 4.Raya Yoga"))
    } else {
        seguirComprando = false
    }
}



function costoEnvio(envio){
    let costoEnvio = 0
    if (totalCompra <= 20000){
        costoEnvio = 10000
    } else if (totalCompra > 20000 && totalCompra <= 50000){
        costoEnvio = 7000
    } else {
        costoEnvio = 0
    } 
    let costoEnvioTotal = costoEnvio
    return costoEnvioTotal
}

const envio = costoEnvio(totalCompra)
let totalCompraMasEnvio = totalCompra + envio

alert(`El valor de tu compra es $${totalCompra} y el costo de envio es de $${envio}. El valor de tu compra mas el envio es de $${totalCompraMasEnvio}`);

