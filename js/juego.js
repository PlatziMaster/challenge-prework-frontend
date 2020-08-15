function juego(){
  var p1 = {vida:100};
  var p2 = {vida:100};
  var turno = "a";
  var max = 30;
  var min = 1;
  var ataque = 0;


// Comparando si tienen vida o no
  
while ((p1.vida > 0) || (p2.vida > 0)){
    
    if (turno == "a") {
      ataque =  Math.floor(Math.random() * (max - min)) + min;

      p2.vida = p2.vida - ataque;
      console.log(`el jugador 2 recibe ${ataque}`);
      turno = "b";
      console.log(`El jugador 2 le quedan ${p2.vida}`)
    } else {
      ataque =  Math.floor(Math.random() * (max - min)) + min;
      p1.vida = p1.vida - ataque;
     
      console.log(`el jugador 1 recibe ${ataque}`);
      turno = "a";
      console.log(`El jugador 1 le quedan ${p1.vida}`)
    }
  }
  

  if (p1.vida <= 0) {
    console.log("El jugador 2 ha ganado")
  } else {
    console.log("El jugador 1 ha ganado!! ")
  }
}













//Idea de ima barra de estado
/*
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}*/