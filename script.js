const inicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");

const btn = inicio.querySelector("button");
btn.addEventListener("click", () => {
   inicio.setAttribute("hidden", true);
   reto1.removeAttribute("hidden");
});
