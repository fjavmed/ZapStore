
const carrito = []
const arrayItems = [];

class Producto {
  constructor(nombre, precio, url, specs) {
      this.nombre = nombre;
      this.precio = precio;
      this.urlImagen = url;
      this.specs = specs;
  }

 

  // mi idea acá es hacer una prueba lógica q marque las tarjetas en "oferta" de momento pinta de amarillo los productos menores a 80.000
  
  mostrar() {
    if (this.precio < 80000)
    {
      return `<div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100" style="background-color:gold">
            <a href="#"><img class="card-img-top" src="${this.urlImagen}" alt=""></a>
            <div class="card-body">
            <h4 class="card-title">
              <a href="#">${this.nombre}</a>
            </h4>
            <h5> $${this.precio}</h5>
            <p class="card-text">${this.specs}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
           <button onclick="agregarAlCarrito(${this.precio})" id="addbutton">Agregar al carrito</button>
            </div>        
            </div>    
          </div>`;
    }
    else
    {
      return `<div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${this.urlImagen}" alt=""></a>
            <div class="card-body">
            <h4 class="card-title">
            <a href="#">${this.nombre}</a>
            </h4>
            <h5> $${this.precio}</h5>
            <p class="card-text">${this.specs}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
           <button onclick="agregarAlCarrito(${this.precio})" id="addbutton">Agregar al carrito</button>
            </div>        
            </div>    
          </div>`;
      }
  }
}


/**
 * Productos que vamos a vender
 */
$('#cargarProductos').click(function() {

  let acumuladorCardsHome = ``;
  $('#productos').html(''); //vaciar div

  jQuery.get('productos.txt', function(data) {
    let lineas = data.split("\n");  // \n es salto de línea

    for (i=0; i<lineas.length; i++) {
      let datos = lineas[i];

      let nombre = datos.split(',')[0];
      let precio = datos.split(',')[1];
      let imagen = datos.split(',')[2];
      let descripcion = datos.split(',')[3];

      let item = new Producto(nombre, precio, imagen, descripcion);
      // arrayItems.push(item);

      $('#productos').append(item.mostrar());
    }

  });

  $('html, body').animate({
    scrollTop: $("#productos").offset().top
  }, 500);
  
  $(document).ready(function(){
    $("#addbutton").click(function(){
      $("#emptyCart").hide();
    });
  });

  /**Generacion de cards de productos para home */

  // for (let i=0; i< arrayItems.length; i++) {

  //     console.log(arrayItems[i].precio)
  //     console.log(arrayItems[i].nombre)

      
  // }


  // $('#productos').html(acumuladorCardsHome);


// let item01 = new Producto('Converse Chuck 70', 54990,'resources/item01.jpg','Converse de estilo clásico');
// let item02 = new Producto('Nike AirMax', 82990,'resources/item02.jpg','Tecnología y máxima comodidad');
// let item03 = new Producto('Champion Hyper', 99990,'resources/item03.jpg','Modelo urbano y estilo');
// let item04 = new Producto('Adidas Forum', 84990,'resources/item04.jpg','Vanguardia comodidad y performance');

// arrayItems.push(item01)
// arrayItems.push(item02)
// arrayItems.push(item03)
// arrayItems.push(item04)

// console.log(arrayItems);


});

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
  $("#hide").click(function(){
    $( "#muestraCarro" ).fadeOut( "slow", function() {
          });


  
  });
  $("#show").click(function(){
    $("#muestraCarro").show();
    $("#muestraCarro").css("color", "red").slideUp(1000).slideDown(1000);    
  });
});

