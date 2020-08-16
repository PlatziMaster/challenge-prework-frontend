window.onload = loadGifs;

// Image in modal
const defaultGif = "https://media0.giphy.com/media/2gtoSIzdrSMFO/giphy.gif?cid=9db78988qor3f5tm6gxbc57x0tlm7wmqph04gjl6vvivzrau&rid=giphy.gif"; // prettier-ignore
const imageGif = document.getElementById("image-gif");

// Body and modal
const body = document.body;
const modal = document.getElementById("modal");
const playerWin = document.getElementById("player-win");

// Controls
const buttonPlayer1 = document.getElementById("button-player-1");
const buttonPlayer2 = document.getElementById("button-player-2");

const lifePercentagePlayer1 = document.getElementById("life-percentage-player-1"); // prettier-ignore
const lifePercentagePlayer2 = document.getElementById("life-percentage-player-2"); // prettier-ignore

const lifeBarRemainingPlayer1 = document.getElementById("life-bar-remaining-player-1"); // prettier-ignore
const lifeBarRemainingPlayer2 = document.getElementById("life-bar-remaining-player-2"); // prettier-ignore

const lifeBarSubtractedPlayer1 = document.getElementById("life-bar-subtracted-player-1"); // prettier-ignore
const lifeBarSubtractedPlayer2 = document.getElementById("life-bar-subtracted-player-2"); // prettier-ignore

let lifePlayer1 = 100;
let lifePlayer2 = 100;
function loadGifs() {
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=GHZIuiSfEe6iTt3wL79r2VgmB1kd2UH5&q=winner&limit=10"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (gifs) {
      const randomIndex = getRandomNumber(10, 1);
      const gif = gifs.data[randomIndex];
      const url = gif.images.original.url;
      imageGif.src = url;
    })
    .catch(function (error) {
      imageGif.src = defaultGif;
    });
}

const getRandomNumber = function (limit, min) {
  const randomNumber = Number.isNaN(limit)
    ? Math.round(Math.random() * 10)
    : Math.round(Math.random() * limit);

  return randomNumber >= min ? randomNumber : min;
};

const playerAttack = function (player) {
  switch (player) {
    case "player-1": {
      // Obtener un valor entre el 5 y el 20
      const lifeToSubtract = getRandomNumber(40, 10);
      // Retirar css por defecto si la barra está al 100%
      if (lifePlayer2 === 100) {
        lifeBarRemainingPlayer2.classList.remove("life-bar-complete");
        lifeBarRemainingPlayer2.classList.add("life-bar-remaining");
        lifeBarSubtractedPlayer2.classList.add("life-bar-subtracted");
      }
      // Restar valor obtenido de la vida del jugador contrario
      lifePlayer2 =
        lifePlayer2 - lifeToSubtract <= 0 ? 0 : lifePlayer2 - lifeToSubtract;
      // Desactivar botón de jugador actual
      buttonPlayer1.setAttribute("disabled", "");
      // Activar botón de jugador contrario
      buttonPlayer2.removeAttribute("disabled");

      // Preparar campos html
      lifePercentagePlayer2.innerHTML = `${lifePlayer2}%`;
      lifeBarRemainingPlayer2.style.width = `${lifePlayer2}%`;
      lifeBarSubtractedPlayer2.style.width = `${100 - lifePlayer2}%`;
      // Verificar modal
      verifyModal("Player 1", lifePlayer2);
      break;
    }
    case "player-2": {
      // Obtener un valor entre el 5 y el 20
      const lifeToSubtract = getRandomNumber(40, 10);
      // Retirar css por defecto si la barra está al 100%
      if (lifePlayer1 === 100) {
        lifeBarRemainingPlayer1.classList.remove("life-bar-complete");
        lifeBarRemainingPlayer1.classList.add("life-bar-remaining");
        lifeBarSubtractedPlayer1.classList.add("life-bar-subtracted");
      }
      // Restar valor obtenido de la vida del jugador contrario
      lifePlayer1 =
        lifePlayer1 - lifeToSubtract <= 0 ? 0 : lifePlayer1 - lifeToSubtract;
      // Desactivar botón de jugador actual
      buttonPlayer2.setAttribute("disabled", "");
      // Activar botón de jugador contrario
      buttonPlayer1.removeAttribute("disabled");
      // Preparar campos html
      lifePercentagePlayer1.innerHTML = `${lifePlayer1}%`;
      lifeBarRemainingPlayer1.style.width = `${lifePlayer1}%`;
      lifeBarSubtractedPlayer1.style.width = `${100 - lifePlayer1}%`;
      // Verificar modal
      verifyModal("Player 2", lifePlayer1);
      break;
    }
  }
};

const verifyModal = function (player, life) {
  if (!Number.isNaN(life) && life <= 0) {
    // Desactivar scroll de body
    body.style.overflow = "hidden";
    // Asignar el jugador que ganó
    playerWin.innerText = player;
    // Activar modal
    modal.style.display = "flex";
    switch (player) {
      case "player-1":
        lifeBarRemainingPlayer2.classList.remove("life-bar-remaining");
        lifeBarSubtractedPlayer2.classList.remove("life-bar-subtracted");
        lifeBarRemainingPlayer2.classList.add("life-bar-incomplete");
        break;
      case "player-2":
        lifeBarRemainingPlayer1.classList.remove("life-bar-remaining");
        lifeBarSubtractedPlayer1.classList.remove("life-bar-subtracted");
        lifeBarRemainingPlayer1.classList.add("life-bar-incomplete");
        break;
    }
  }
};

const restartGame = function () {
  body.style.overflow = "initial";
  modal.style.display = "none";
  lifePlayer1 = 100;
  lifePlayer2 = 100;

  lifeBarRemainingPlayer1.classList.remove(["life-bar-incomplete", "life-bar-remaining"]); // prettier-ignore
  lifeBarRemainingPlayer1.style.width = "100%";
  lifePercentagePlayer1.innerHTML = "100%";
  lifeBarRemainingPlayer1.classList.add("life-bar-complete");
  lifeBarSubtractedPlayer1.classList.remove("life-bar-subtracted");
  lifeBarSubtractedPlayer1.style.width = "0%";
  buttonPlayer1.removeAttribute("disabled");

  lifeBarRemainingPlayer2.classList.remove(["life-bar-incomplete", "life-bar-remaining"]); // prettier-ignore
  lifeBarRemainingPlayer2.style.width = "100%";
  lifePercentagePlayer2.innerHTML = "100%";
  lifeBarRemainingPlayer2.classList.add("life-bar-complete");
  lifeBarSubtractedPlayer2.classList.remove("life-barks-subtracted");
  lifeBarSubtractedPlayer2.style.width = "0%";
  buttonPlayer2.setAttribute("disabled", "");

  loadGifs();
};
