var vidap1 = 100;
var vidap2 = 100;
var turno = 1;
var max = 10;
var min = 1;
var ataque = 0;

var barrap1 = (vidap1*215)/100;
var barrap2 = (vidap2*215)/100;





        while ((vidap1 > 0) || (vidap2 > 0)){
            
          if (turno == 1) {

                ataque =  Math.floor(Math.random() * (max - min)) + min;

                vidap2 = vidap2 - ataque;
                console.log(`el jugador 2 recibe ${ataque}`);
                turno = 2;
                console.log(`El jugador 2 le quedan ${vidap2}`);
                var barrap2 = Math.floor((vidap1*215)/100);
                $("#saludp2").width(barrap2)

           
          } else {
            
              ataque =  Math.floor(Math.random() * (max - min)) + min;
              vidap1 = vidap1 - ataque;
            
              console.log(`el jugador 1 recibe ${ataque}`);
              turno = 1;
              console.log(`El jugador 1 le quedan ${vidap1}`);
              var barrap1 = Math.floor((vidap2*215)/100);
              $("#saludp1").width(barrap1)
          }

        }

        if (vidap1 <= 0) {
          console.log("El jugador 2 ha ganado");
          $('#modal').show();
          $("#modal-content_winner-text-an").text("Player 2");
          $("#play-again").click(function(){
            $('#modal').fadeOut();
          });
        } else {
          console.log("El jugador 1 ha ganado!! ");
          $('#modal').show();
          $("#modal-content_winner-text-an").text("Player 1");
          $("#play-again").click(function(){
            $('#modal').fadeOut();
          });

        }

    
        $(document).ready(function(){

          $("#player1-healt_avg-txt").text(vidap1);
          $("#player2-healt_avg-txt").text(vidap2);
          
          $("#btn-player1").click(function(){ $("#player2-healt_avg-txt").text(vidap2);});
          $("#btn-player2").click(function(){$("#player1-healt_avg-txt").text(vidap1);});
        });




// Comparando si tienen vida o no
  
// while ((p1.vida > 0) || (p2.vida > 0)){
    
//     if (turno == "a") {
//       ataque =  Math.floor(Math.random() * (max - min)) + min;

//       p2.vida = p2.vida - ataque;
//       console.log(`el jugador 2 recibe ${ataque}`);
//       turno = "b";
//       console.log(`El jugador 2 le quedan ${p2.vida}`)
//     } else {
//       ataque =  Math.floor(Math.random() * (max - min)) + min;
//       p1.vida = p1.vida - ataque;
     
//       console.log(`el jugador 1 recibe ${ataque}`);
//       turno = "a";
//       console.log(`El jugador 1 le quedan ${p1.vida}`)
//     }
//   }
  

//   if (p1.vida <= 0) {
//     console.log("El jugador 2 ha ganado");

//   } else {
//     console.log("El jugador 1 ha ganado!! ")
//   }














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