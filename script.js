const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const hp1Bar = document.getElementById("hp1Bar");
const hp2Bar = document.getElementById("hp2Bar");
const modal = document.getElementById("finish");
const winner = document.getElementById("winner");
const btn1 = document.getElementById("player1_play");
const btn2 = document.getElementById("player2_play");

let turnoActual = 1;
let vida1 = 100;
let vida2 = 100;
let btnActual;
let btnInactivo;

function jugar(jugador) {
  if (turnoActual != jugador) {
    if (ruleta() == 1) restarVida(jugador);
    siguienteTurno();
  }
}

function restarVida(jugador) {
  if (jugador == 1) {
    vida1 -= 10;
    hp1Bar.style.width = vida1 + "%";
    hp1.innerHTML = vida1 + "%";
    if(vida1==0){
      modal.style.visibility="visible"
      winner.innerHTML="The winner is Player 2"
    }
  } else {
    vida2 -= 10;
    hp2Bar.style.width = vida2 + "%";
    hp2.innerHTML = vida2 + "%";
    if(vida2==0){
      modal.style.visibility="visible"
      winner.innerHTML="The winner is Player 1"
    }
  }
}

function siguienteTurno() {
    if (turnoActual == 1) {
    btnActual = btn1;
    btnInactivo = btn2;
    turnoActual = 2;
  } else {
    btnActual = btn2;
    btnInactivo = btn1;
    turnoActual = 1;
  }
  btnActual.classList.add("disable");
  btnInactivo.classList.remove("disable");
}

function ruleta() {
  return Math.floor(Math.random() * 2); //Numero aleatorio 1 para acertar 0 para fallar
}

function reload(){
  location.reload();
}
