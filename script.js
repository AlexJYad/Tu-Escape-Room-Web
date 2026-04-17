const inicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");
const succses = document.getElementById("pantalla-final-exito");
const wasted = document.getElementById("pantalla-final-wasted");
const togglePista1 = document.getElementById("togglePista1");
const pista1 = document.getElementById("pista1");
const body = document.body;
const musicButtons = document.querySelectorAll(".btn-music");
const musicIconOn = "./assets/icons/volume_up.svg";
const musicIconOff = "./assets/icons/volume_off.svg";
const backgroundMusic = new Audio("./assets/music.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.25;

function updateMusicButtons() {
  const musicEnabled = !backgroundMusic.paused;

  musicButtons.forEach((button) => {
    const iconMusic = button.querySelector("img");
    if (!iconMusic) return;

    iconMusic.src = musicEnabled ? musicIconOn : musicIconOff;
    iconMusic.alt = musicEnabled ? "Musica activada" : "Musica desactivada";
    button.setAttribute(
      "aria-label",
      musicEnabled ? "Apagar musica" : "Encender musica",
    );
  });
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }

  updateMusicButtons();
}

function setBodyBackground(screenName) {
  body.classList.remove(
    "body--inicio",
    "body--reto1",
    "body--exito",
    "body--wasted",
  );
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
  machine.resetValue();
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

musicButtons.forEach((button) => {
  button.addEventListener("click", toggleMusic);
});

updateMusicButtons();
setBodyBackground("inicio");
