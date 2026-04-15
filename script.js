const inicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");
const succses = document.getElementById("pantalla-final-exito");
const wasted = document.getElementById("pantalla-final-wasted");

function testRetoUno() {
   if (machine.getValue() == 555) {
      succses.removeAttribute("hidden");
   } else {
      wasted.removeAttribute("hidden");
      console.log("machine.getValue()");
   }
   reto1.setAttribute("hidden", true);
}

const btn = inicio.querySelector("button");
btn.addEventListener("click", () => {
   inicio.setAttribute("hidden", true);
   reto1.removeAttribute("hidden");
});

const btnReto1 = reto1.querySelector("button");
btnReto1.addEventListener("click", testRetoUno);

const btnSuccses = succses.querySelector("button");
btnSuccses.addEventListener("click", () => {
   succses.setAttribute("hidden", true);
   inicio.removeAttribute("hidden");
});

const btnWasted = wasted.querySelector("button");
btnWasted.addEventListener("click", () => {
   wasted.setAttribute("hidden", true);
   inicio.removeAttribute("hidden");
});
