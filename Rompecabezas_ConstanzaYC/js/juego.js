// Representación de la grilla. Cada nro representa a una pieza.
// El 9 es la posición vacía
var grilla = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//var arr = [1,2,3,4,5,6,7,8,9];

// Acá vamos a ir guardando la posición vacía
var posicionVacia = {
  fila: 2,
  columna: 2
};

// Esta función va a chequear si el Rompecabezas está en la posición ganadora
/*recorrer el array y cada resultado guardarlo en distintas variables (que serán arrays, porque
tienen tres índices cada una.) Estas variables deben ser recorridas con for.*/

//Creé esta función que recibe un array de arrays(que tienen números) y devuelve otro array de números.
function aplanarGrilla(array) {
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    var elementoActual = array[i];
    resultado.push(elementoActual[0], elementoActual[1], elementoActual[2]);
  }
  return resultado; //esto es lo que devuelve la función y luego puedo utilizarlo en otras.-
}
//aplanarGrilla(grilla);

function chequearSiGano(grillaRecibida) {
  for (var i = 1; i < grillaRecibida.length; i++) { //la variable es 1, porque es el segundo elemento del array 
    //que SÍ tiene n° anterior.-
    var elementoActual = grillaRecibida[i];
    var elementoAnterior = grillaRecibida[i - 1]; //-1 porque es el anterior 
    if (elementoAnterior < elementoActual) {
      // continúo
    } else {
      // no ganó
      return false;
    }
  }
  return true;
}

//chequearSiGano(grilla);

function mostrarCartelGanador() {
  alert('ganaste');
}

//función intrcambiar posicion con grilla
function intercambiarPosicionesEnGrilla(fila1, columna1, fila2, columna2) {
  var n1 = grilla [filaPos1][columnaPos1]; // guardo el valor en una variable para luego reubicarla.-

  grilla [filaPos1][columnaPos1] = grilla [filaPos2][columnaPos2]; 

  grilla [filaPos2][columnaPos2] = n1; //Acá se reubicó la variable en la posición deseada.-
}

// Intercambia posiciones grilla y en el DOM
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
 
  var posicion1 = fila1 * 3 + columna1;
  var posicion2 = fila2 * 3 + columna2;

  var n1 = arr[posicion1];

  arr[posicion1] = arr[posicion2]; 

  arr[posicion2] = n1;
}

// var children = document.getElementById('juego').children;
function clonarArray(array){
  //comienza con un array vacío.
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    var elementoActual = array[i];
    resultado.push(elementoActual);
    }
  //terminar retornando el resultado.
  return resultado;
}
//la función sirve para clonar el array de los divs del DOM que está arriba de la función.
clonarArray(document.getElementById('juego').children);


// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {

}


// Para chequear si la posición está dentro de la grilla.
function posicionValida(fila, columna) {

}

// Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando
// su posición con otro elemento
function moverEnDireccion(direccion) {

  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Intercambia pieza blanca con la pieza que está arriba suyo
  if (direccion == 40) {
    nuevaFilaPiezaVacia = posicionVacia.fila - 1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;
  }
  // Intercambia pieza blanca con la pieza que está abajo suyo
  else if (direccion == 38) {
    nuevaFilaPiezaVacia = posicionVacia.fila + 1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;

  }
  // Intercambia pieza blanca con la pieza que está a su izq
  else if (direccion == 39) {
    // Completar

  }
  // Intercambia pieza blanca con la pieza que está a su der
  else if (direccion == 37) {
    // Completar
  }

  // Se chequea si la nueva posición es válida, si lo es, se intercambia 
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
    intercambiarPosiciones(posicionVacia.fila, posicionVacia.columna,
      nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }

}

// Extras, ya vienen dadas

function mezclarPiezas(veces) {
  if (veces <= 0) {
    return;
  }
  var direcciones = [40, 38, 39, 37];
  var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function() {
    mezclarPiezas(veces - 1);
  }, 100);
}

function capturarTeclas() {
  document.body.onkeydown = (function(evento) {
    if (evento.which == 40 || evento.which == 38 || evento.which == 39 || evento.which == 37) {
      moverEnDireccion(evento.which);

      var gano = chequearSiGano(aplanarGrilla(grilla));
      if (gano) {
        setTimeout(function() {
          mostrarCartelGanador();
        }, 500);
      }
      evento.preventDefault();
    }
  })
}

function iniciar() {
  mezclarPiezas(60);
  capturarTeclas();
  console.log('iniciar')
}


iniciar();