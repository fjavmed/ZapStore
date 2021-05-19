
const carrito = []
const arrayItems = [];

class Producto {
constructor(nombre, precio, url, specs) {
    this.nombre = nombre;
    this.precio = precio;
    this.urlImagen = url;
    this.specs = specs;
}

}


/**
 * Productos que vamos a vender
 */

let item01 = new Producto('Converse Chuck 70', 54990,'resources/item01.jpg','Converse de estilo clásico');
let item02 = new Producto('Nike AirMax', 82990,'resources/item02.jpg','Tecnología y máxima comodidad');
let item03 = new Producto('Champion Hyper', 99990,'resources/item03.jpg','Modelo urbano y estilo');
let item04 = new Producto('Adidas Forum', 84990,'resources/item04.jpg','Vanguardia comodidad y performance');

arrayItems.push(item01)
arrayItems.push(item02)
arrayItems.push(item03)
arrayItems.push(item04)

console.log(arrayItems);



let acumuladorCardsHome = ``;

/**Generacion de cards de productos para home */

for (let i=0; i< arrayItems.length; i++) {

    console.log(arrayItems[i].precio)
    console.log(arrayItems[i].nombre)

    acumuladorCardsHome += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${arrayItems[i].urlImagen}" alt=""></a>
      <div class="card-body">
      <h4 class="card-title">
      <a href="#">${arrayItems[i].nombre}</a>
      </h4>
      <h5> $${arrayItems[i].precio}</h5>
      <p class="card-text">${arrayItems[i].specs}</p>
      </div>
      <div class="card-footer">
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
     <button onclick="agregarAlCarrito(${arrayItems[i].precio})" id="addbutton">Agregar al carrito</button>
      </div>
      
      </div>
    
      </div>`;
}


$('#productos').html(acumuladorCardsHome)


  // Selector
  const showCart = document.getElementById("muestraCarro");
  //const showCart =  $('muestraCarro');
 


  // crea elemento
  const textoCarrito = document.createElement("p");

    
function agregarAlCarrito(precio){
    carrito.push(precio);
    console.log(carrito);
    console.log(`Tienes ${carrito.length} productos en tu carrito`)

      // se incorpora el elemento
    if (carrito.length>0) {
        showCart.appendChild(textoCarrito);
    
        textoCarrito.textContent = "Has seleccionado "+ carrito.length +" productos ";
    } 
                    
}

$(document).ready(function(){
  $("#addbutton").click(function(){
    $("#emptyCart").hide();
  });
});

// desafío 13


$(document).ready(function(){
  $("#hide").click(function(){
    $( "#muestraCarro" ).fadeOut( "slow", function() {
          });


  
  });
  $("#show").click(function(){
    $("#muestraCarro").show();
    $("#muestraCarro").css("color", "red").slideUp(1000).slideDown(1000);    
  });
});

