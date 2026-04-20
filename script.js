const screens = {
  inicio: document.getElementById("pantalla-inicio"),
  reto1: document.getElementById("reto1"),
  reto2: document.getElementById("reto2"),
  reto3: document.getElementById("reto3"),
  exito: document.getElementById("pantalla-final-exito"),
  wasted: document.getElementById("pantalla-final-wasted"),
};

const body = document.body;
const musicButtons = document.querySelectorAll(".btn-music");
const musicIconOn = "./assets/icons/volume_up.svg";
const musicIconOff = "./assets/icons/volume_off.svg";
const backgroundMusic = new Audio("./assets/music.mp3");

const togglePista1 = document.getElementById("togglePista1");
const togglePista2 = document.getElementById("togglePista2");
const togglePista3 = document.getElementById("togglePista3");
const pista1 = document.getElementById("pista1");
const pista2 = document.getElementById("pista2");
const pista3 = document.getElementById("pista3");

const mensajeReto1 = document.getElementById("mensajeReto1");
const mensajeReto2 = document.getElementById("mensajeReto2");
const mensajeReto3 = document.getElementById("mensajeReto3");

const btnEmpezar = document.getElementById("btn-empezar");
const btnReto1 = document.getElementById("btn-reto1");
const surrenderButtons = document.querySelectorAll(".btn-rindo");
const btnReto3 = document.getElementById("btn-reto3");
const btnReiniciarExito = document.getElementById("btn-reiniciar-exito");
const btnReiniciarWasted = document.getElementById("btn-reiniciar-wasted");

const opcionesReto2 = document.querySelectorAll(".opcion-reto2");
const opcionesReto3 = document.querySelectorAll('input[name="respuestaReto3"]');

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
    "body--reto2",
    "body--reto3",
    "body--exito",
    "body--wasted",
  );
  body.classList.add(`body--${screenName}`);
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) =>
    screen.setAttribute("hidden", true),
  );
  screens[screenName].removeAttribute("hidden");
  setBodyBackground(screenName);
}

function toggleHint(hintElement) {
  if (hintElement.hasAttribute("hidden")) {
    hintElement.removeAttribute("hidden");
    return;
  }

  hintElement.setAttribute("hidden", true);
}

function resetGame() {
  machine.resetValue();
  opcionesReto3.forEach((option) => {
    option.checked = false;
  });

  [mensajeReto1, mensajeReto2, mensajeReto3].forEach((message) => {
    message.textContent = "";
  });

  [pista1, pista2, pista3].forEach((hint) => {
    hint.setAttribute("hidden", true);
  });

  showScreen("inicio");
}

function checkReto1() {
  if (machine.getValue() === 555) {
    mensajeReto1.textContent = "Codigo correcto. Pasas al siguiente reto.";
    showScreen("reto2");
    return;
  }

  mensajeReto1.textContent = "Codigo incorrecto. Intentalo otra vez.";
}

function checkReto2(selectedValue) {
  if (selectedValue === "80") {
    mensajeReto2.textContent = "Secuencia correcta. Vamos al tercer reto.";
    showScreen("reto3");
    return;
  }

  mensajeReto2.textContent = "Esa opcion no abre la caja fuerte.";
}

function checkReto3() {
  const selectedOption = document.querySelector(
    'input[name="respuestaReto3"]:checked',
  );

  if (selectedOption?.value === "policia") {
    mensajeReto3.textContent = "Has despistado a la policia.";
    showScreen("exito");
    return;
  }

  mensajeReto3.textContent = "Respuesta incorrecta. Prueba otra opcion.";
}

btnEmpezar.addEventListener("click", () => {
  showScreen("reto1");
});

btnReto1.addEventListener("click", checkReto1);

surrenderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen("wasted");
  });
});

opcionesReto2.forEach((button) => {
  button.addEventListener("click", () => {
    checkReto2(button.dataset.value);
  });
});

btnReto3.addEventListener("click", checkReto3);

btnReiniciarExito.addEventListener("click", resetGame);
btnReiniciarWasted.addEventListener("click", resetGame);

togglePista1.addEventListener("click", () => toggleHint(pista1));
togglePista2.addEventListener("click", () => toggleHint(pista2));
togglePista3.addEventListener("click", () => toggleHint(pista3));

musicButtons.forEach((button) => {
  button.addEventListener("click", toggleMusic);
});

updateMusicButtons();
resetGame();
