const inicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");
const succses = document.getElementById("pantalla-final-exito");
const wasted = document.getElementById("pantalla-final-wasted");
const togglePista1 = document.getElementById("togglePista1");
const pista1 = document.getElementById("pista1");
const body = document.body;

function setBodyBackground(screenName) {
  body.classList.remove("body--inicio", "body--reto1", "body--exito", "body--wasted");
  body.classList.add(`body--${screenName}`);
}

function testRetoUno() {
  if (machine.getValue() == 555) {
    succses.removeAttribute("hidden");
    setBodyBackground("exito");
  } else {
    wasted.removeAttribute("hidden");
    setBodyBackground("wasted");
  }
  reto1.setAttribute("hidden", true);
}

const btn = inicio.querySelector("button");
btn.addEventListener("click", () => {
  inicio.setAttribute("hidden", true);
  reto1.removeAttribute("hidden");
  setBodyBackground("reto1");
});

const btnReto1 = document.getElementById("btn-reto1");
btnReto1.addEventListener("click", testRetoUno);

const btnRingar = document.getElementById("btn-rindo");
btnRingar.addEventListener("click", () => {
  reto1.setAttribute("hidden", true);
  wasted.removeAttribute("hidden");
  setBodyBackground("wasted");
});

const btnSuccses = succses.querySelector("button");
btnSuccses.addEventListener("click", () => {
  succses.setAttribute("hidden", true);
  inicio.removeAttribute("hidden");
  setBodyBackground("inicio");
});

const btnWasted = wasted.querySelector("button");
btnWasted.addEventListener("click", () => {
  wasted.setAttribute("hidden", true);
  inicio.removeAttribute("hidden");
  setBodyBackground("inicio");
});

togglePista1.addEventListener("click", () => {
  if (pista1.hasAttribute("hidden")) {
    pista1.removeAttribute("hidden");
  } else {
    pista1.setAttribute("hidden", true);
  }
});

setBodyBackground("inicio");
