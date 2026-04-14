// =========================
// DATOS DEL JUEGO
// =========================

// TODO: crea aquí las variables necesarias para tus retos
// Ejemplo: número secreto, array de palabras, objeto personaje, contador...


// =========================
// SELECCIÓN DE ELEMENTOS DOM
// =========================

const pantallaInicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");
const reto2 = document.getElementById("reto2");
const reto3 = document.getElementById("reto3");
const pantallaFinal = document.getElementById("pantalla-final");

const btnEmpezar = document.getElementById("btn-empezar");
const btnReto1 = document.getElementById("btn-reto1");
const btnReto3 = document.getElementById("btn-reto3");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroJugador = document.getElementById("numeroJugador");
const mensajeReto1 = document.getElementById("mensajeReto1");

const listaPalabras = document.getElementById("listaPalabras");
const mensajeReto2 = document.getElementById("mensajeReto2");

const nombrePersonaje = document.getElementById("nombrePersonaje");
const edadPersonaje = document.getElementById("edadPersonaje");
const profesionPersonaje = document.getElementById("profesionPersonaje");
const respuestaCiudad = document.getElementById("respuestaCiudad");
const mensajeReto3 = document.getElementById("mensajeReto3");

const mensajeFinal = document.getElementById("mensajeFinal");


// =========================
// FUNCIONES
// =========================

function ocultarPantallas() {
  pantallaInicio.classList.add("oculta");
  reto1.classList.add("oculta");
  reto2.classList.add("oculta");
  reto3.classList.add("oculta");
  pantallaFinal.classList.add("oculta");
}

function mostrarPantalla(pantalla) {
  ocultarPantallas();
  pantalla.classList.remove("oculta");
}

// TODO: crea una función para comprobar el reto 1
function comprobarReto1() {
  // 1. Leer el valor del input
  // 2. Compararlo con la solución
  // 3. Mostrar un mensaje
  // 4. Pasar al siguiente reto si acierta
}

// TODO: crea una función para cargar las opciones del reto 2
function cargarPalabras() {
  listaPalabras.innerHTML = "";

  // Recorre aquí un array y crea elementos con createElement
  // Después añádelos a listaPalabras con appendChild
}

// TODO: crea una función para comprobar el reto 2
function comprobarReto2(opcionSeleccionada) {
  // Compara la opción elegida con la correcta
  // Muestra mensaje y avanza si acierta
}

// TODO: crea una función para mostrar los datos del objeto en pantalla
function cargarPersonaje() {
  // Asigna valores a nombrePersonaje, edadPersonaje y profesionPersonaje
}

// TODO: crea una función para comprobar el reto 3
function comprobarReto3() {
  // Leer la respuesta del usuario
  // Comparar con el dato correcto del objeto
  // Mostrar mensaje final si acierta
}

function reiniciarJuego() {
  numeroJugador.value = "";
  respuestaCiudad.value = "";
  mensajeReto1.textContent = "";
  mensajeReto2.textContent = "";
  mensajeReto3.textContent = "";

  mostrarPantalla(pantallaInicio);
}


// =========================
// EVENTOS
// =========================

btnEmpezar.addEventListener("click", function () {
  mostrarPantalla(reto1);
});

btnReto1.addEventListener("click", comprobarReto1);
btnReto3.addEventListener("click", comprobarReto3);
btnReiniciar.addEventListener("click", reiniciarJuego);


// =========================
// INICIO
// =========================

// TODO: llama aquí a las funciones necesarias para preparar el juego
