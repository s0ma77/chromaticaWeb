// La pagina tiene que tener:
/*Que el usuario tenga su mail y contraseña si asi lo desea, productos, descuentos, carrito (tus pedidos) y un buscador,  */



class Inventario{
    constructor(nombre, id, precio, stock){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
        this.info = `${nombre}: $${precio}`;
    }
        updateStock(){
            this.stock = this.stock + 1;
        }
        soldStock(){
            this.stock = this.stock - 1;
        }
        
}


const taza = new Inventario ("Taza", 1, 450, 5);
const mate = new Inventario ("Mate", 2, 600, 7);
const relojes = new Inventario ("Reloj", 3, 1000, 3);
const vasoTerm = new Inventario ("Vaso Térmico", 4, 1500, 6);
const cartucheras = new Inventario ("Cartuchera", 5, 500, 12);


//PRIMERA INSTANCIA - LOGIN//

function login(){
    let usuario = document.getElementById("mail");
    let password = document.getElementById("pass");
    let user = prompt("Ingrese su nombre de usuario- Para salir escriba 'esc'");

        if (usuario.value == "luz@gmail.com" && password.value == "12345"){

            let parAdmin = document.createElement("p")
            parAdmin.innerHTML = (`Bienvenido/a administrador ${user}`);
            parAdmin.style.color = "purple";
            parAdmin.style.backgroundColor = "white";
            parAdmin.style.fontSize = "50px";
            let mensaje = document.getElementById("mensaje");
            mensaje.appendChild(parAdmin);
        }
        else if (user == "esc"){
            alert("Ingresando como invitado...");
        }
        else if (user != "esc"){
            alert(`Bienvenido/a a Chromatica Deco ${user}`);
        }
        else {
            alert("Datos incorrectos");
            return login();
        }       
}

//SEGUNDA INSTANCIA - CATALOGO//

// Mostrar los productos //

let arrayInven = [taza.info,mate.info,relojes.info,vasoTerm.info,cartucheras.info];

function catalogo(){
    let showProd = prompt("¿Deseas ver nuestro catalogo? Ingrese 's' para continuar o 'cancel' para salir.");
    for( let i = 0 ; i < arrayInven.length ; i++){
    
        if (showProd === "s"){
        document.write(arrayInven[i]);
        }
        else if (showProd == "cancel"){
        alert("Volviendo al inicio");
        }
        else {
        alert("Datos incorrectos");  
        }
    }  
}

//TERCER INSTANCIA - CARRITO DE COMPRA//
// a- El usuario elige que productos desea llevar, con los que va seleccionando a traves de una interfaz numerica, ponerlos dentro de un array de objetos.
// b- Mostrar los productos que seleccionó, aplicar el descuento y mostrar el total.

/* 
class compraCarrito{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        descuento() = (this.precio - (this.precio * (15 / 100)));

    }
}
*/
/*
function clienteCompra(){
    let clienteCompra = prompt("¿Quiere comprar? ingrese 's' para ir al carrito de compra, o 'esc' para salir");
    if (clienteCompra == "s"){
        carrito();
    }
    else if (clienteCompra == "esc"){
        login();
    }
    else {
        alert("Datos incorrectos");
        login();
    }
}
let compra = [];

function carrito(){

    let select = prompt("Seleccione sus productos de compra. Escribe '1'= Taza, '2'= Mate,'3'= Reloj, '4'= Vaso Termico, '5'= Cartuchera.");
    let cantidad = parseInt(prompt("¿Cuantos deseas llevar?"));
    let add = prompt("¿Quiere agregar mas productos? Ingrese 'si' para continuar comprando o 'cancel' para salir.");

    do  {
        if (select == "1"){
            compra.push({nombre: "Taza", cantidad: cantidad});
        }
        else if (select == "2"){
            compra.push({nombre: "Mate", cantidad: cantidad});
        }
        else if (select == "3"){
            compra.push({nombre: "Reloj", cantidad: cantidad});

        }else if (select == "4"){
            compra.push({nombre: "Vaso Termico", cantidad: cantidad});

        }else if (select == "5"){
            compra.push({nombre: "Cartuchera", cantidad: cantidad});
        }
        else{
            alert("Datos incorrectos");
        }
    }
    while (add != "si"){
        return console.log(compra);
    }
}    
    
/* 
function carrito(){

    let carr = prompt("¿Que producto quieres comprar de nuestra tienda? Escribe '1', '2' o '3'. (1=latas, 2=Taza lisa, 3=Mate de madera)");
    let cant = parseInt(prompt("¿Cuantos deseas llevar? ESC para salir"));

    let prod = productos.find(p => p.id == carr)
    prod.soldStock(cant)
    
    
    if(productos.filter(p => p.nombre === carr).length){
    
        compra.push({nombre: prod.nombre, cantidad: cant});
        alert("Muchas gracias");
    }
    else {
        alert("Muchas gracias");
    }
   
}
//HACER UNA FUNCION taza.push

//CUARTA INSTANCIA - STOCK//
//Actualizar el stock de productos segun la venta del carrito//

*/ /*
login();
catalogo();
//clienteCompra();
//carrito();

*/

