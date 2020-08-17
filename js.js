document.getElementById("play1").addEventListener("click", function(){  
    
    document.getElementById("play2").addEventListener("click", play2());

    function play2() {
        console.log("turno del jugador 2")
        document.getElementById('play1').disabled = false;
        document.getElementById('play2').disabled;
    }

    document.getElementById("play1").addEventListener("click", play2());

    function play2() {
        console.log("turno del jugador 1")
        document.getElementById('play1').disabled;
        document.getElementById('play2').disabled;
    }
});








// document.getElementById("play1").addEventListener("click", function(){  
//     document.getElementById("play2").addEventListener("click", player2());
    // document.getElementById('play1').disabled = true;                     
    // document.getElementById('play2').disabled = false;
    // var hp = 150;
    // var hp2 = 150;
    // do {
    //    if (document.getElementById('play1').disabled) {
    //         let damage = Math.floor(Math.random() * (50 - 1)) + 1;
    //         console.log(damage) 
    //         var player2 = hp - damage;
    //         console.log(player2) 
    //         let x = parseInt((player2 * 100)/hp);   
    //         hp = player2;   
    //         console.log(hp)                   
    //         document.getElementById("percent1").innerHTML = x+"%"; 
    //         document.getElementById('play1').disabled = false;
    //         document.getElementById('play2').disabled = true;
    //         console.log("true")
    //     } else if(){
    //         let damage = Math.floor(Math.random() * (50 - 1)) + 1; 
    //         var player1 = hp2 - damage;
    //         let x = parseInt((player1 * 100)/hp);                               
    //         document.getElementById("percent1").innerHTML = x+"%"; 
    //         document.getElementById('play1').disabled = true;
    //         document.getElementById('play2').disabled = false;
    //         console.log("false")
    //     } 
    // } while (hp > 0 || hp2 > 0);
    
    
   

    
//   });


